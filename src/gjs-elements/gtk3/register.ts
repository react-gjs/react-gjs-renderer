import type { GjsElementManager } from "../gjs-element-manager";
import { ActionBarElement } from "./action-bar/action-bar";
import { BoxElement } from "./box/box";
import { ButtonBoxElement } from "./button-box/button-box";
import { ButtonGroupElement } from "./button-group/button-group";
import { ButtonElement } from "./button/button";
import { CheckButtonElement } from "./check-button/check-button";
import { ColorButtonElement } from "./color-button/color-button";
import { CustomWidgetElement } from "./custom-widget/custom-widget";
import { ExpanderElement } from "./expander/expander";
import { FlowBoxElement } from "./flow-box/flow-box";
import { FlowBoxEntryElement } from "./flow-box/flow-box-entry";
import { FrameElement } from "./frame/frame";
import { GridElement } from "./grid/grid";
import { GridItemElement } from "./grid/grid-item";
import { HeaderBarElement } from "./headerbar/headerbar";
import { IconElement } from "./icon/icon";
import { ImageElement } from "./image/image";
import { LabelElement } from "./label/label";
import { LevelBarElement } from "./level-bar/level-bar";
import { LinkButtonElement } from "./link-button/link-button";
import { MarkupElement } from "./markup/markup";
import { MAnchorElement } from "./markup/markup-elements/a";
import { MBoldElement } from "./markup/markup-elements/b";
import { MBigElement } from "./markup/markup-elements/big";
import { MItalicElement } from "./markup/markup-elements/i";
import { MStrikethroughElement } from "./markup/markup-elements/s";
import { MSmallElement } from "./markup/markup-elements/small";
import { MSpanElement } from "./markup/markup-elements/span";
import { MSubElement } from "./markup/markup-elements/sub";
import { MSupElement } from "./markup/markup-elements/sup";
import { MMonospaceElement } from "./markup/markup-elements/tt";
import { MUnderlineElement } from "./markup/markup-elements/u";
import { MenuBarElement } from "./menu-bar/menu-bar";
import { MenuBarItemElement } from "./menu-bar/menu-bar-item";
import { MenuCheckButtonElement } from "./menu-bar/menu-check-button";
import { MenuEntryElement } from "./menu-bar/menu-entry";
import { MenuRadioButtonElement } from "./menu-bar/menu-radio-button";
import { MenuSeparatorElement } from "./menu-bar/menu-separator";
import { ModelButtonElement } from "./model-button/model-button";
import { NumberInputElement } from "./number-input/number-input";
import { PanedElement } from "./paned/paned";
import { PopoverMenuCheckButtonElement } from "./popover-menu/content-elements/popover-menu-check-button";
import { PopoverMenuEntryElement } from "./popover-menu/content-elements/popover-menu-entry";
import { PopoverMenuItemElement } from "./popover-menu/content-elements/popover-menu-item";
import { PopoverMenuRadioButtonElement } from "./popover-menu/content-elements/popover-menu-radio-button";
import { PopoverMenuSeparatorElement } from "./popover-menu/content-elements/popover-menu-separator";
import { PopoverMenuElement } from "./popover-menu/popover-menu";
import { PopoverMenuContentElement } from "./popover-menu/popover-menu-content";
import { PopoverMenuTargetElement } from "./popover-menu/popover-menu-target";
import { PopoverElement } from "./popover/popover";
import { PopoverContentElement } from "./popover/popover-content";
import { PopoverTargetElement } from "./popover/popover-target";
import { PressableElement } from "./pressable/pressable";
import { ProgressBarElement } from "./progress-bar/progress-bar";
import { RadioButtonElement } from "./radio/radio-button";
import { RadioGroupElement } from "./radio/radio-group";
import { RevealerElement } from "./revealer/revealer";
import { ScrollBoxElement } from "./scroll-box/scroll-box";
import { SearchBarElement } from "./search-bar/search-bar";
import { SearchInputElement } from "./search-input/search-input";
import { SelectorElement } from "./selector/selector";
import { SeparatorElement } from "./separator/separator";
import { SizeGroupBoxElement } from "./size-group-box/size-group-box";
import { SliderPopupButtonElement } from "./slider-popup-button/slider-popup-button";
import { SliderElement } from "./slider/slider";
import { SpinnerElement } from "./spinner/spinner";
import { StackElement } from "./stack/stack";
import { StackScreenElement } from "./stack/stack-screen";
import { StackSwitcherElement } from "./stack/stack-switcher";
import { SwitchElement } from "./switch/switch";
import { TextAreaElement } from "./text-area/text-area";
import { TextEntryElement } from "./text-entry/text-entry";
import { TextViewElement } from "./text-view/text-view";
import { TextViewImageElement } from "./text-view/text-view-elements/text-view-image";
import { TextViewLinkElement } from "./text-view/text-view-elements/text-view-link";
import { TextViewSpanElement } from "./text-view/text-view-elements/text-view-span";
import { TextViewWidgetElement } from "./text-view/text-view-elements/text-view-widget";
import { ToolbarElement } from "./toolbar/toolbar";
import { ToolbarButtonElement } from "./toolbar/toolbar-button";
import { ToolbarItemElement } from "./toolbar/toolbar-item";
import { ToolbarRadioButtonElement } from "./toolbar/toolbar-radio-button";
import { ToolbarSeparatorElement } from "./toolbar/toolbar-separator";
import { ToolbarToggleButtonElement } from "./toolbar/toolbar-toggle-button";
import { VolumeButtonElement } from "./volume-button/volume-button";
import { WindowElement } from "./window/window";

export const registerGtk3Elements = (
  manager: typeof GjsElementManager,
) => {
  manager.register("ACTION_BAR", ActionBarElement);
  manager.register("BOX", BoxElement);
  manager.register("BUTTON_BOX", ButtonBoxElement);
  manager.register("BUTTON_GROUP", ButtonGroupElement);
  manager.register("BUTTON", ButtonElement);
  manager.register("CHECK_BUTTON", CheckButtonElement);
  manager.register("COLOR_BUTTON", ColorButtonElement);
  manager.register("CUSTOM_WIDGET", CustomWidgetElement);
  manager.register("EXPANDER", ExpanderElement);
  manager.register("FLOW_BOX_ENTRY", FlowBoxEntryElement);
  manager.register("FLOW_BOX", FlowBoxElement);
  manager.register("FRAME", FrameElement);
  manager.register("GRID_ITEM", GridItemElement);
  manager.register("GRID", GridElement);
  manager.register("HEADER_BAR", HeaderBarElement);
  manager.register("ICON", IconElement);
  manager.register("IMAGE", ImageElement);
  manager.register("LABEL", LabelElement);
  manager.register("LEVEL_BAR", LevelBarElement);
  manager.register("LINK_BUTTON", LinkButtonElement);
  manager.register("M_ANCHOR", MAnchorElement);
  manager.register("M_BIG", MBigElement);
  manager.register("M_BOLD", MBoldElement);
  manager.register("M_ITALIC", MItalicElement);
  manager.register("M_MONOSPACE", MMonospaceElement);
  manager.register("M_SMALL", MSmallElement);
  manager.register("M_SPAN", MSpanElement);
  manager.register("M_STRIKETHROUGH", MStrikethroughElement);
  manager.register("M_SUBSCRIPT", MSubElement);
  manager.register("M_SUPERSCRIPT", MSupElement);
  manager.register("M_UNDERLINE", MUnderlineElement);
  manager.register("MARKUP", MarkupElement);
  manager.register("MENU_BAR", MenuBarElement);
  manager.register("MENU_BAR_ITEM", MenuBarItemElement);
  manager.register("MENU_CHECK_BUTTON", MenuCheckButtonElement);
  manager.register("MENU_ENTRY", MenuEntryElement);
  manager.register("MENU_RADIO_BUTTON", MenuRadioButtonElement);
  manager.register("MENU_SEPARATOR", MenuSeparatorElement);
  manager.register("MODEL_BUTTON", ModelButtonElement);
  manager.register("NUMBER_INPUT", NumberInputElement);
  manager.register("PANED", PanedElement);
  manager.register("POPOVER_CONTENT", PopoverContentElement);
  manager.register("POPOVER_TARGET", PopoverTargetElement);
  manager.register("POPOVER", PopoverElement);
  manager.register("POPOVER_MENU", PopoverMenuElement);
  manager.register("POPOVER_MENU_ENTRY", PopoverMenuEntryElement);
  manager.register("POPOVER_MENU_ITEM", PopoverMenuItemElement);
  manager.register("POPOVER_MENU_CONTENT", PopoverMenuContentElement);
  manager.register("POPOVER_MENU_TARGET", PopoverMenuTargetElement);
  manager.register(
    "POPOVER_MENU_CHECK_BUTTON",
    PopoverMenuCheckButtonElement,
  );
  manager.register(
    "POPOVER_MENU_RADIO_BUTTON",
    PopoverMenuRadioButtonElement,
  );
  manager.register(
    "POPOVER_MENU_SEPARATOR",
    PopoverMenuSeparatorElement,
  );
  manager.register("PRESSABLE", PressableElement);
  manager.register("PROGRESS_BAR", ProgressBarElement);
  manager.register("RADIO_GROUP", RadioGroupElement);
  manager.register("RADIO_BUTTON", RadioButtonElement);
  manager.register("REVEALER", RevealerElement);
  manager.register("SCROLL_BOX", ScrollBoxElement);
  manager.register("SEARCH_BAR", SearchBarElement);
  manager.register("SEARCH_INPUT", SearchInputElement);
  manager.register("SELECTOR", SelectorElement);
  manager.register("SEPARATOR", SeparatorElement);
  manager.register("SIZE_GROUP_BOX", SizeGroupBoxElement);
  manager.register("SLIDER_POPUP_BUTTON", SliderPopupButtonElement);
  manager.register("SLIDER", SliderElement);
  manager.register("SPINNER", SpinnerElement);
  manager.register("STACK_SCREEN", StackScreenElement);
  manager.register("STACK_SWITCHER", StackSwitcherElement);
  manager.register("STACK", StackElement);
  manager.register("SWITCH", SwitchElement);
  manager.register("TEXT_AREA", TextAreaElement);
  manager.register("TEXT_ENTRY", TextEntryElement);
  manager.register("TEXT_VIEW", TextViewElement);
  manager.register("TEXT_VIEW_IMAGE", TextViewImageElement);
  manager.register("TEXT_VIEW_LINK", TextViewLinkElement);
  manager.register("TEXT_VIEW_SPAN", TextViewSpanElement);
  manager.register("TEXT_VIEW_WIDGET", TextViewWidgetElement);
  manager.register("TOOLBAR_BUTTON", ToolbarButtonElement);
  manager.register("TOOLBAR_ITEM", ToolbarItemElement);
  manager.register("TOOLBAR_RADIO_BUTTON", ToolbarRadioButtonElement);
  manager.register("TOOLBAR_SEPARATOR", ToolbarSeparatorElement);
  manager.register(
    "TOOLBAR_TOGGLE_BUTTON",
    ToolbarToggleButtonElement,
  );
  manager.register("TOOLBAR", ToolbarElement);
  manager.register("VOLUME_BUTTON", VolumeButtonElement);
  manager.register("WINDOW", WindowElement);
};
