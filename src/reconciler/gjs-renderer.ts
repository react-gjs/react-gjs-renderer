import type Gtk from "gi://Gtk";
import Reconciler from "react-reconciler";
import { GjsElementManager } from "../gjs-elements/gjs-element-manager";
import type { GjsElementTypes } from "../gjs-elements/gjs-element-types";
import { ApplicationElement } from "../gjs-elements/gtk3/application/application";
import { TextNode } from "../gjs-elements/gtk3/markup/text-node";
import { registerGtk3Elements } from "../gjs-elements/gtk3/register";

import { diffProps } from "../gjs-elements/utils/diff-props";
import { DoNotAppend } from "../gjs-elements/utils/do-not-append";
import { isGjsElementOrString } from "../gjs-elements/utils/is-gjs-element";
import { EventPhaseController } from "./event-phase";
import { HostContext } from "./host-context";

registerGtk3Elements(GjsElementManager);

export type GjsContext = {
  isInTextContext: boolean;
  application: ApplicationElement;
};

const performAppendAction = (action: () => void) => {
  try {
    action();
  } catch (e) {
    if (typeof e === "object" && e !== null && e instanceof DoNotAppend) {
      // do nothing
    } else {
      throw e;
    }
  }
};

export const GjsRenderer = Reconciler({
  isPrimaryRenderer: true,
  noTimeout: -1,
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  afterActiveInstanceBlur() {},
  appendChildToContainer(container: any, child: any) {
    performAppendAction(() => {
      if (
        isGjsElementOrString(child) &&
        GjsElementManager.isGjsElement(container)
      ) {
        container.appendChild(child);
        container.render();
      }
    });
  },
  appendInitialChild(parentInstance: any, child: any) {
    performAppendAction(() => {
      if (
        isGjsElementOrString(child) &&
        GjsElementManager.isGjsElement(parentInstance)
      ) {
        parentInstance.appendChild(child);
        parentInstance.render();
      }
    });
  },
  appendChild(parentInstance: any, child: any) {
    performAppendAction(() => {
      if (
        isGjsElementOrString(child) &&
        GjsElementManager.isGjsElement(parentInstance)
      ) {
        parentInstance.appendChild(child);
        parentInstance.render();
      }
    });
  },
  beforeActiveInstanceBlur() {},
  cancelTimeout: clearTimeout,
  createInstance(
    type: GjsElementTypes,
    props: any,
    rootContainer,
    hostContext: HostContext<GjsContext>,
    internalHandle
  ) {
    const diffedProps = diffProps({}, props, true);

    return GjsElementManager.create(type, diffedProps, hostContext);
  },
  createTextInstance(
    text,
    rootContainer,
    hostContext: HostContext<GjsContext>,
    internalHandle
  ) {
    if (hostContext.get("isInTextContext") !== true) {
      throw new Error("Text Instances are not supported");
    }

    return new TextNode(text);
  },
  detachDeletedInstance(node) {},
  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    return true;
  },
  getChildHostContext(
    parentHostContext: HostContext<GjsContext>,
    type,
    rootContainer
  ): HostContext<GjsContext> {
    return GjsElementManager.getContextForKind(type, parentHostContext);
  },
  getCurrentEventPriority() {
    return EventPhaseController.getCurrentPhase();
  },
  getInstanceFromNode(node) {
    return undefined;
  },
  getInstanceFromScope(scopeInstance) {},
  getPublicInstance(instance) {
    return instance;
  },
  getRootHostContext(rootContainer) {
    return HostContext.init<GjsContext>({
      isInTextContext: false,
      application: rootContainer,
    });
  },
  prepareForCommit(containerInfo) {
    return null;
  },
  preparePortalMount(containerInfo) {},
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainer,
    hostContext: HostContext<GjsContext>
  ) {
    if (GjsElementManager.isGjsElement(instance)) {
      return instance.diffProps(oldProps, newProps);
    }
  },
  resetAfterCommit(containerInfo) {},
  prepareScopeUpdate(scopeInstance, instance) {},
  scheduleTimeout: setTimeout,
  shouldSetTextContent(type: any, props: any) {
    return false;
  },
  commitUpdate(
    instance: any,
    updatePayload,
    type,
    prevProps,
    nextProps,
    internalHandle
  ) {
    if (updatePayload && GjsElementManager.isGjsElement(instance)) {
      instance.updateProps(updatePayload);
      instance.render();
    }
  },
  commitTextUpdate(textInstance: any, oldText, newText) {
    if (TextNode.isTextNode(textInstance)) {
      if (oldText !== newText) {
        textInstance.updateText(newText);
        textInstance.render();
      }
    }
  },
  removeChild(parentInstance: any, child: any) {
    if (GjsElementManager.isGjsElement(child)) {
      child.remove(parentInstance);
      parentInstance.render();
    }
  },
  removeChildFromContainer(container: any, child: any) {
    if (GjsElementManager.isGjsElement(child)) {
      child.remove(container);
      container.render();
    }
  },
  commitMount(instance, type, props, internalInstanceHandle) {
    if (GjsElementManager.isGjsElement(instance)) {
      instance.render();
    }
  },
  clearContainer(container) {
    if (container instanceof ApplicationElement) {
      container.clear();
    } else if (GjsElementManager.isGjsElement(container)) {
      if ((container.widget as Gtk.Box).get_children) {
        const children = (container.widget as Gtk.Box).get_children();
        for (const child of children) {
          child.destroy();
        }
      }
    }
  },
  resetTextContent(instance) {},
  insertBefore(parentInstance, child, beforeChild) {
    performAppendAction(() => {
      if (
        GjsElementManager.isGjsElement(parentInstance) &&
        GjsElementManager.isGjsElement(child) &&
        GjsElementManager.isGjsElement(beforeChild)
      ) {
        parentInstance.insertBefore(child, beforeChild);
        parentInstance.render();
      }
    });
  },
  insertInContainerBefore(container, child, beforeChild) {
    performAppendAction(() => {
      if (
        GjsElementManager.isGjsElement(container) &&
        GjsElementManager.isGjsElement(child) &&
        GjsElementManager.isGjsElement(beforeChild)
      ) {
        container.insertBefore(child, beforeChild);
        container.render();
      }
    });
  },
  hideInstance(instance) {
    if (GjsElementManager.isGjsElement(instance)) {
      instance.hide();
    }
  },
  unhideInstance(instance, props) {
    if (GjsElementManager.isGjsElement(instance)) {
      instance.updateProps(instance.diffProps({}, props));
      instance.show();
    }
  },
  hideTextInstance(instance) {
    if (TextNode.isTextNode(instance)) {
      instance.hide();
    }
  },
  unhideTextInstance(instance, text) {
    if (TextNode.isTextNode(instance)) {
      instance.updateText(text);
      instance.show();
    }
  },
});
