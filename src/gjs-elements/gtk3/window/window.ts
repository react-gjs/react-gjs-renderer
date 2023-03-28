import { DataType } from "dilswer";
import GdkPixbuf from "gi://GdkPixbuf";
import Gtk from "gi://Gtk";
import { WindowTypeHint } from "../../../g-enums";
import { EventPhase } from "../../../reconciler/event-phase";
import type { GjsContext } from "../../../reconciler/gjs-renderer";
import type { HostContext } from "../../../reconciler/host-context";
import type { GjsElement } from "../../gjs-element";
import { GjsElementManager } from "../../gjs-element-manager";
import { diffProps } from "../../utils/diff-props";
import { ChildOrderController } from "../../utils/element-extenders/child-order-controller";
import { ElementLifecycleController } from "../../utils/element-extenders/element-lifecycle-controller";
import type { SyntheticEvent } from "../../utils/element-extenders/event-handlers";
import { EventHandlers } from "../../utils/element-extenders/event-handlers";
import type { DiffedProps } from "../../utils/element-extenders/map-properties";
import { PropertyMapper } from "../../utils/element-extenders/map-properties";
import { ensureNotText } from "../../utils/ensure-not-string";
import type { ApplicationElement } from "../application/application";
import { HeaderBarElement } from "../headerbar/headerbar";
import type { TextNode } from "../text-node";

export type WindowEvent<P extends Record<string, any> = {}> = SyntheticEvent<
  P,
  WindowElement
>;

export type WindowProps = {
  decorate?: boolean;
  defaultHeight?: number;
  defaultWidth?: number;
  minHeight?: number;
  minWidth?: number;
  hideTitlebarWhenMaximized?: boolean;
  icon?: GdkPixbuf.Pixbuf;
  resizable?: boolean;
  showCloseButton?: boolean;
  title?: string;
  windowTypeHint?: WindowTypeHint;
  /**
   * If set to `true`, when the close button on the window is pressed,
   * the application will quit.
   */
  quitAppOnClose?: boolean;
  onClose?: (event: WindowEvent) => void;
  onDestroy?: (event: WindowEvent) => void;
  onDragBegin?: (event: WindowEvent) => void;
  onDragEnd?: (event: WindowEvent) => void;
  onFocus?: (event: WindowEvent) => void;
  onHide?: (event: WindowEvent) => void;
  onResize?: (event: WindowEvent<{ width: number; height: number }>) => void;
};

export class WindowElement implements GjsElement<"WINDOW", Gtk.Window> {
  static getContext(
    currentContext: HostContext<GjsContext>
  ): HostContext<GjsContext> {
    return currentContext;
  }

  readonly kind = "WINDOW";
  private widget = new Gtk.Window();

  private accelGroup = new Gtk.AccelGroup();

  private mainApp?: ApplicationElement;
  private parent: GjsElement | null = null;

  readonly lifecycle = new ElementLifecycleController();
  private readonly children = new ChildOrderController(
    this.lifecycle,
    this.widget,
    this.addChild.bind(this)
  );
  private readonly handlers = new EventHandlers(this);
  private readonly propsMapper = new PropertyMapper<WindowProps>(
    this.lifecycle,
    (props) =>
      props
        .title(DataType.String, (v = "") => {
          this.widget.title = v;
        })
        .defaultWidth(DataType.Number, (v = -1) => {
          this.widget.default_width = v;
        })
        .defaultHeight(DataType.Number, (v = -1) => {
          this.widget.default_height = v;
        })
        .minHeight(DataType.Number, (v = 0, allProps) => {
          this.widget.set_size_request(allProps.minWidth ?? 0, v);
        })
        .minWidth(DataType.Number, (v = 0, allProps) => {
          this.widget.set_size_request(v, allProps.minHeight ?? 0);
        })
        .decorate(DataType.Boolean, (v = true) => {
          this.widget.decorated = v;
        })
        .hideTitlebarWhenMaximized(DataType.Boolean, (v = true) => {
          this.widget.hide_titlebar_when_maximized = v;
        })
        .resizable(DataType.Boolean, (v = true) => {
          this.widget.resizable = v;
        })
        .showCloseButton(DataType.Boolean, (v = true) => {
          this.widget.deletable = v;
        })
        .windowTypeHint(
          DataType.Enum(WindowTypeHint),
          (v = WindowTypeHint.NORMAL) => {
            this.widget.type_hint = v;
          }
        )
        .icon(DataType.RecordOf({}), (v) => {
          if (v) {
            if (v instanceof GdkPixbuf.Pixbuf) {
              this.widget.icon = v;
              return;
            }
          }

          this.widget.set_icon(null);
        })
  );

  isDisposed = false;

  constructor(props: DiffedProps, context: HostContext<GjsContext>) {
    this.widget.add_accel_group(this.accelGroup);

    this.mainApp = context.get("application");
    if (this.mainApp) {
      this.mainApp.addWindowToApp(this);
    }

    this.handlers.bindInternal("destroy", () => {
      this.isDisposed = true;
      this.handlers.notifyWidgetDestroyedOutsideLifecycle();
    });

    this.handlers.bind("destroy", "onDestroy");
    this.handlers.bind("delete-event", "onClose");
    this.handlers.bind(
      "drag-begin",
      "onDragBegin",
      undefined,
      EventPhase.Action
    );
    this.handlers.bind("drag-end", "onDragEnd", undefined, EventPhase.Action);
    this.handlers.bind("focus", "onFocus", undefined, EventPhase.Action);
    this.handlers.bind("hide", "onHide", undefined, EventPhase.Action);
    this.handlers.bind(
      "configure-event",
      "onResize",
      () => ({
        width: this.widget.get_allocated_width(),
        height: this.widget.get_allocated_height(),
      }),
      EventPhase.Action
    );

    this.updateProps(props);

    this.lifecycle.emitLifecycleEventAfterCreate();

    const onMount = this.getProperty("onWindowMounted");

    if (onMount) {
      onMount(this);
    }
  }

  private addChild(widget: Gtk.Widget, element: GjsElement, index: number) {
    if (
      index === 0 &&
      GjsElementManager.isGjsElementOfKind(element, HeaderBarElement)
    ) {
      this.widget.set_titlebar(widget);
    } else {
      this.widget.add(widget);
    }
  }

  private defaultOnCloseHandler(
    event: WindowEvent,
    originalHandler?: WindowProps["onClose"]
  ) {
    event.preventDefault();

    let canQuit = true;

    const preventQuit = () => {
      canQuit = false;
    };

    const result = originalHandler?.({
      ...event,
      stopPropagation: preventQuit,
      preventDefault: preventQuit,
    });

    if (canQuit && this.propsMapper.currentProps.quitAppOnClose) {
      this.mainApp?.reactContext?.quit();
    }

    return result;
  }

  private wrapOnCloseProp(props: DiffedProps): DiffedProps {
    const propName: keyof WindowProps = "onClose";
    const onclose = props.find(([k]) => k === propName);

    if (onclose) {
      const originalHandler = onclose[1] as undefined | WindowProps["onClose"];
      onclose[1] = (event: WindowEvent) => {
        return this.defaultOnCloseHandler(event, originalHandler);
      };
    } else {
      props.push([
        propName,
        (event: WindowEvent) => {
          this.defaultOnCloseHandler(event);
        },
      ]);
    }

    return props;
  }

  getAccelGroup(): Gtk.AccelGroup {
    return this.accelGroup;
  }

  updateProps(props: DiffedProps): void {
    if (this.isDisposed) {
      throw new Error("Can't update props of a disposed window");
    }

    this.lifecycle.emitLifecycleEventUpdate(this.wrapOnCloseProp(props));
  }

  // #region This widget direct mutations

  appendChild(child: GjsElement | TextNode): void {
    if (this.isDisposed) {
      throw new Error("Can't append child to disposed window");
    }

    ensureNotText(child);

    const shouldAppend = child.notifyWillAppendTo(this);
    this.children.addChild(child, !shouldAppend);
  }

  insertBefore(newChild: GjsElement | TextNode, beforeChild: GjsElement): void {
    if (this.isDisposed) {
      throw new Error("Can't append child to disposed window");
    }

    ensureNotText(newChild);

    const shouldAppend = newChild.notifyWillAppendTo(this);
    this.children.insertBefore(newChild, beforeChild, !shouldAppend);
    this.widget.show_all();
  }

  remove(parent: GjsElement): void {
    this.mainApp?.removeWindowFromApp(this);
    parent.notifyWillUnmount(this);

    this.lifecycle.emitLifecycleEventBeforeDestroy();

    if (!this.isDisposed) {
      this.widget.close();
      this.widget.destroy();
    }
  }

  render(): void {
    if (!this.isDisposed) this.widget.show_all();
  }

  // #endregion

  // #region Element internal signals

  notifyWillAppendTo(parent: GjsElement): boolean {
    if (this.isDisposed) {
      throw new Error("Can't append child to disposed window");
    }

    this.parent = parent;

    return false;
  }

  notifyWillUnmount(child: GjsElement): void {
    if (!this.isDisposed) this.children.removeChild(child);
  }

  // #endregion

  // #region Utils for external use

  show() {
    if (!this.isDisposed) this.widget.visible = true;
  }

  hide() {
    if (!this.isDisposed) this.widget.visible = false;
  }

  getWidget() {
    return this.widget;
  }

  getParentElement() {
    return this.parent;
  }

  addEventListener(
    signal: string,
    callback: Rg.GjsElementEvenTListenerCallback
  ): void {
    return this.handlers.addListener(signal, callback);
  }

  removeEventListener(
    signal: string,
    callback: Rg.GjsElementEvenTListenerCallback
  ): void {
    return this.handlers.removeListener(signal, callback);
  }

  setProperty(key: string, value: any) {
    if (this.isDisposed) {
      throw new Error("Can't append child to disposed window");
    }

    this.lifecycle.emitLifecycleEventUpdate(
      this.wrapOnCloseProp([[key, value]])
    );
  }

  getProperty(key: string) {
    return this.propsMapper.get(key);
  }

  diffProps(
    oldProps: Record<string, any>,
    newProps: Record<string, any>
  ): DiffedProps {
    return diffProps(oldProps, newProps, true);
  }

  // #endregion
}
