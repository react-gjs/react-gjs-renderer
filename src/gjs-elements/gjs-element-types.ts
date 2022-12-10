export interface GjsElementTypeRegistry {
  BOX: "BOX";
  BUTTON: "BUTTON";
  BUTTON_BOX: "BUTTON_BOX";
  CHECK_BUTTON: "CHECK_BUTTON";
  EXPANDER: "EXPANDER";
  FLOW_BOX_ENTRY: "FLOW_BOX_ENTRY";
  FLOW_BOX: "FLOW_BOX";
  GRID: "GRID";
  GRID_ITEM: "GRID_ITEM";
  IMAGE: "IMAGE";
  LABEL: "LABEL";
  LINK_BUTTON: "LINK_BUTTON";
  MARKUP: "MARKUP";
  M_BIG: "M_BIG";
  M_BOLD: "M_BOLD";
  M_ITALIC: "M_ITALIC";
  M_MONOSPACE: "M_MONOSPACE";
  M_SMALL: "M_SMALL";
  M_SPAN: "M_SPAN";
  M_STRIKETHROUGH: "M_STRIKETHROUGH";
  M_SUBSCRIPT: "M_SUBSCRIPT";
  M_SUPERSCRIPT: "M_SUPERSCRIPT";
  M_UNDERLINE: "M_UNDERLINE";
  NUMBER_INPUT: "NUMBER_INPUT";
  POPOVER: "POPOVER";
  POPOVER_CONTENT: "POPOVER_CONTENT";
  POPOVER_TARGET: "POPOVER_TARGET";
  PRESSABLE: "PRESSABLE";
  RADIO_BUTTON: "RADIO_BUTTON";
  RADIO_BOX: "RADIO_BOX";
  REVEALER: "REVEALER";
  SCROLL_BOX: "SCROLL_BOX";
  SELECTOR: "SELECTOR";
  SEPARATOR: "SEPARATOR";
  STACK: "STACK";
  STACK_SWITCHER: "STACK_SWITCHER";
  STACK_SCREEN: "STACK_SCREEN";
  SWITCH: "SWITCH";
  TEXT_AREA: "TEXT_AREA";
  TEXT_ENTRY: "TEXT_ENTRY";
  WINDOW: "WINDOW";
}

export type GjsElementTypes = keyof GjsElementTypeRegistry;
