import { DataType } from "dilswer";
import Gtk from "gi://Gtk";
import type {
  PopoverConstraint,
  PositionType,
} from "../../../enums/gtk3-index";
import type { GjsContext } from "../../../reconciler/gjs-renderer";
import type { HostContext } from "../../../reconciler/host-context";
import type { GjsElement } from "../../gjs-element";
import { GjsElementManager } from "../../gjs-element-manager";
import { diffProps } from "../../utils/diff-props";
import { ElementLifecycleController } from "../../utils/element-extenders/element-lifecycle-controller";
import { EventHandlers } from "../../utils/element-extenders/event-handlers";
import type { DiffedProps } from "../../utils/element-extenders/map-properties";
import { PropertyMapper } from "../../utils/element-extenders/map-properties";
import type { AlignmentProps } from "../../utils/property-maps-factories/create-alignment-prop-mapper";
import { createAlignmentPropMapper } from "../../utils/property-maps-factories/create-alignment-prop-mapper";
import type { ExpandProps } from "../../utils/property-maps-factories/create-expand-prop-mapper";
import { createExpandPropMapper } from "../../utils/property-maps-factories/create-expand-prop-mapper";
import type { MarginProps } from "../../utils/property-maps-factories/create-margin-prop-mapper";
import { createMarginPropMapper } from "../../utils/property-maps-factories/create-margin-prop-mapper";
import type { SizeRequestProps } from "../../utils/property-maps-factories/create-size-request-prop-mapper";
import { createSizeRequestPropMapper } from "../../utils/property-maps-factories/create-size-request-prop-mapper";
import type { StyleProps } from "../../utils/property-maps-factories/create-style-prop-mapper";
import { createStylePropMapper } from "../../utils/property-maps-factories/create-style-prop-mapper";
import { Bin } from "../../utils/widgets/bin";
import type { TextNode } from "../text-node";
import { PopoverContentElement } from "./popover-content";
import { PopoverTargetElement } from "./popover-target";

type PopoverPropsMixin = SizeRequestProps &
  AlignmentProps &
  MarginProps &
  ExpandProps &
  StyleProps;

export interface PopoverProps extends PopoverPropsMixin {
  isModal?: boolean;
  constraint?: PopoverConstraint;
  position?: PositionType;
}

export type PopoverInternalProps = {
  popoverWidget: Gtk.Popover;
};

export class PopoverElement implements GjsElement<"POPOVER", Bin> {
  static getContext(
    currentContext: HostContext<GjsContext>,
  ): HostContext<GjsContext> {
    return currentContext;
  }

  readonly kind = "POPOVER";
  private widget = new Bin();
  private popover!: Gtk.Popover;

  private parent: GjsElement | null = null;

  readonly lifecycle = new ElementLifecycleController();
  private readonly handlers = new EventHandlers<Bin, PopoverProps>(
    this,
  );
  private readonly propsMapper = new PropertyMapper<
    PopoverProps & PopoverInternalProps
  >(
    this.lifecycle,
    createSizeRequestPropMapper(this.widget),
    createAlignmentPropMapper(this.widget),
    createMarginPropMapper(this.widget),
    createExpandPropMapper(this.widget),
    createStylePropMapper(this.widget),
    (props) =>
      props
        .popoverWidget(DataType.Unknown, (popoverWidget) => {
          this.popover = popoverWidget as Gtk.Popover;
          this.popover.set_relative_to(this.widget);
        })
        .isModal(DataType.Boolean, (v = false) => {
          this.popover.set_modal(v);
        })
        .constraint(
          DataType.Enum(Gtk.PopoverConstraint),
          (v = Gtk.PopoverConstraint.NONE) => {
            this.popover.set_constrain_to(v);
          },
        )
        .position(
          DataType.Enum(Gtk.PositionType),
          (v = Gtk.PositionType.BOTTOM) => {
            this.popover.set_position(v);
          },
        ),
  );

  private hasContentChild = false;
  private contentElement?: PopoverContentElement;
  private hasTarget = false;
  private targetElement?: PopoverTargetElement;

  constructor(props: DiffedProps) {
    this.propsMapper.skipDefaults();
    this.updateProps(props);

    this.lifecycle.emitLifecycleEventAfterCreate();
  }

  onContentChange() {
    if (this.targetElement)
      this.popover.add(this.targetElement.getWidget());
  }

  onTargetChange() {
    if (this.contentElement)
      this.widget.add(this.contentElement.getWidget());
  }

  updateProps(props: DiffedProps): void {
    this.lifecycle.emitLifecycleEventUpdate(props);
  }

  // #region This widget direct mutations

  appendChild(child: GjsElement | TextNode): void {
    if (
      GjsElementManager.isGjsElementOfKind(
        child,
        PopoverContentElement,
      )
    ) {
      if (this.hasContentChild) {
        throw new Error("Popover can only have one child");
      }
      const shouldAppend = child.notifyWillAppendTo(this);
      if (shouldAppend) {
        this.popover.add(child.getWidget());
        this.hasContentChild = true;
        this.contentElement = child;
      }
    } else if (
      GjsElementManager.isGjsElementOfKind(
        child,
        PopoverTargetElement,
      )
    ) {
      if (this.hasTarget) {
        throw new Error("Popover can only have one target");
      }
      const shouldAppend = child.notifyWillAppendTo(this);
      if (shouldAppend) {
        this.widget.add(child.getWidget());
        this.hasTarget = true;
        this.targetElement = child;
        this.popover.relative_to = child.getWidget();
      }
    } else {
      throw new Error(
        "Popover can only have one PopoverTarget and one PopoverContent as it's children.",
      );
    }
  }

  insertBefore(newChild: GjsElement | TextNode): void {
    // TODO: proper handling of insertBefore
    this.appendChild(newChild);
  }

  remove(parent: GjsElement): void {
    parent.notifyWillUnmount(this);

    this.lifecycle.emitLifecycleEventBeforeDestroy();

    this.widget.destroy();
    this.popover.destroy();
  }

  render() {
    this.widget.show_all();
  }

  // #endregion

  // #region Element internal signals

  notifyWillAppendTo(parent: GjsElement): boolean {
    this.parent = parent;
    return true;
  }

  notifyWillUnmount(child: GjsElement): void {
    if (
      GjsElementManager.isGjsElementOfKind(
        child,
        PopoverContentElement,
      )
    ) {
      this.hasContentChild = false;
      this.contentElement = undefined;
    } else if (
      GjsElementManager.isGjsElementOfKind(
        child,
        PopoverTargetElement,
      )
    ) {
      this.hasTarget = false;
      this.targetElement = undefined;
    }
  }

  // #endregion

  // #region Utils for external use

  show() {
    this.widget.visible = true;
  }

  hide() {
    this.widget.visible = false;
  }

  getWidget() {
    return this.widget;
  }

  getParentElement() {
    return this.parent;
  }

  addEventListener(
    signal: string,
    callback: Rg.GjsElementEvenTListenerCallback,
  ): void {
    return this.handlers.addListener(signal, callback);
  }

  removeEventListener(
    signal: string,
    callback: Rg.GjsElementEvenTListenerCallback,
  ): void {
    return this.handlers.removeListener(signal, callback);
  }

  setProperty(key: string, value: any) {
    this.lifecycle.emitLifecycleEventUpdate([[key, value]]);
  }

  getProperty(key: string) {
    return this.propsMapper.get(key);
  }

  diffProps(
    oldProps: Record<string, any>,
    newProps: Record<string, any>,
  ): DiffedProps {
    return diffProps(oldProps, newProps, true);
  }

  // #endregion
}
