import { DataType } from "dilswer";
import Gtk from "gi://Gtk";
import { EventPhase } from "../../../reconciler/event-phase";
import type { GjsContext } from "../../../reconciler/gjs-renderer";
import type { HostContext } from "../../../reconciler/host-context";
import { BaseElement, type GjsElement } from "../../gjs-element";
import type { ElementMargin } from "../../utils/apply-margin";
import { ElementLifecycleController } from "../../utils/element-extenders/element-lifecycle-controller";
import type { SyntheticEvent } from "../../utils/element-extenders/event-handlers";
import { EventHandlers } from "../../utils/element-extenders/event-handlers";
import type { DiffedProps } from "../../utils/element-extenders/map-properties";
import { PropertyMapper } from "../../utils/element-extenders/map-properties";
import { TextChildController } from "../../utils/element-extenders/text-child-controller";
import type { PointerData } from "../../utils/gdk-events/pointer-event";
import { parseCrossingEvent } from "../../utils/gdk-events/pointer-event";
import { mountAction } from "../../utils/mount-action";
import type { AccelProps } from "../../utils/property-maps-factories/create-accel-prop-mapper";
import { createAccelPropMapper } from "../../utils/property-maps-factories/create-accel-prop-mapper";
import type { AlignmentProps } from "../../utils/property-maps-factories/create-alignment-prop-mapper";
import { createAlignmentPropMapper } from "../../utils/property-maps-factories/create-alignment-prop-mapper";
import type { ChildPropertiesProps } from "../../utils/property-maps-factories/create-child-props-mapper";
import { createChildPropsMapper } from "../../utils/property-maps-factories/create-child-props-mapper";
import type { ExpandProps } from "../../utils/property-maps-factories/create-expand-prop-mapper";
import { createExpandPropMapper } from "../../utils/property-maps-factories/create-expand-prop-mapper";
import type { MarginProps } from "../../utils/property-maps-factories/create-margin-prop-mapper";
import { createMarginPropMapper } from "../../utils/property-maps-factories/create-margin-prop-mapper";
import type { SizeRequestProps } from "../../utils/property-maps-factories/create-size-request-prop-mapper";
import { createSizeRequestPropMapper } from "../../utils/property-maps-factories/create-size-request-prop-mapper";
import type { StyleProps } from "../../utils/property-maps-factories/create-style-prop-mapper";
import { createStylePropMapper } from "../../utils/property-maps-factories/create-style-prop-mapper";
import type { TooltipProps } from "../../utils/property-maps-factories/create-tooltip-prop-mapper";
import { createTooltipPropMapper } from "../../utils/property-maps-factories/create-tooltip-prop-mapper";
import type { TextNode } from "../text-node";

type LinkButtonPropsMixin = ChildPropertiesProps &
  SizeRequestProps &
  AlignmentProps &
  MarginProps &
  ExpandProps &
  StyleProps &
  TooltipProps &
  AccelProps;

export type LinkButtonEvent<P extends Record<string, any> = {}> =
  SyntheticEvent<P, LinkButtonElement>;

export interface LinkButtonProps extends LinkButtonPropsMixin {
  label?: string;
  useUnderline?: boolean;
  margin?: ElementMargin;
  onClick?: (event: LinkButtonEvent) => void;
  onActivate?: (event: LinkButtonEvent) => void;
  onPressed?: (event: LinkButtonEvent) => void;
  onReleased?: (event: LinkButtonEvent) => void;
  onMouseEnter?: (event: LinkButtonEvent<PointerData>) => void;
  onMouseLeave?: (event: LinkButtonEvent<PointerData>) => void;
}

export class LinkButtonElement
  extends BaseElement
  implements GjsElement<"LINK_BUTTON", Gtk.LinkButton>
{
  static getContext(
    currentContext: HostContext<GjsContext>,
  ): HostContext<GjsContext> {
    return currentContext.set({
      isInTextContext: true,
    });
  }

  readonly kind = "LINK_BUTTON";
  protected widget = new Gtk.LinkButton();

  protected parent: GjsElement | null = null;

  readonly lifecycle = new ElementLifecycleController();
  protected readonly handlers = new EventHandlers<
    Gtk.Button,
    LinkButtonProps
  >(this);

  protected readonly propsMapper =
    new PropertyMapper<LinkButtonProps>(
      this.lifecycle,
      createSizeRequestPropMapper(this.widget),
      createAlignmentPropMapper(this.widget),
      createMarginPropMapper(this.widget),
      createExpandPropMapper(this.widget),
      createStylePropMapper(this.widget),
      createTooltipPropMapper(this.widget),
      createAccelPropMapper(this.widget),
      createChildPropsMapper(
        () => this.widget,
        () => this.parent,
      ),
      (props) =>
        props
          .label(DataType.String, (v = "") => {
            this.widget.label = v;
          })
          .useUnderline(DataType.Boolean, (v = false) => {
            this.widget.use_underline = v;
          }),
    );

  protected readonly children = new TextChildController(
    this.lifecycle,
    (text) => {
      this.widget.label = text;
    },
  );

  constructor(props: DiffedProps) {
    super();
    this.handlers.bind("clicked", "onClick");
    this.handlers.bind("activate", "onActivate");
    this.handlers.bind("pressed", "onPressed");
    this.handlers.bind("released", "onReleased");
    this.handlers.bind(
      "enter-notify-event",
      "onMouseEnter",
      parseCrossingEvent,
      EventPhase.Action,
    );
    this.handlers.bind(
      "leave-notify-event",
      "onMouseLeave",
      parseCrossingEvent,
      EventPhase.Action,
    );

    this.widget.connect("activate-link", () => {
      return true;
    });

    this.updateProps(props);

    this.lifecycle.emitLifecycleEventAfterCreate();
  }

  updateProps(props: DiffedProps): void {
    this.lifecycle.emitLifecycleEventUpdate(props);
  }

  // #region This widget direct mutations

  appendChild(child: TextNode | GjsElement): void {
    if (child.kind === "TEXT_NODE") {
      mountAction(this, child, (shouldOmitMount) => {
        this.children.addChild(child);
      });
      return;
    }

    throw new Error("LinkButton cannot have non-text children.");
  }

  insertBefore(
    child: TextNode | GjsElement,
    beforeChild: TextNode | GjsElement,
  ): void {
    if (child.kind === "TEXT_NODE") {
      mountAction(this, child, (shouldOmitMount) => {
        this.children.insertBefore(child, beforeChild);
      });
      return;
    }

    throw new Error("CheckButton cannot have non-text children.");
  }

  remove(parent: GjsElement): void {
    parent.notifyChildWillUnmount(this);

    this.lifecycle.emitLifecycleEventBeforeDestroy();

    this.widget.destroy();
  }

  render() {
    this.children.update();
    this.widget.show_all();
  }

  // #endregion

  // #region Element internal signals

  notifyWillMountTo(parent: GjsElement): boolean {
    this.parent = parent;
    return true;
  }

  notifyMounted(): void {
    this.lifecycle.emitMountedEvent();
  }

  notifyChildWillUnmount(child: GjsElement | TextNode) {
    this.children.removeChild(child);
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

  // #endregion
}
