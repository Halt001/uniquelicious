
export enum Category {
  BASIS_KIND,
  BASIS_PROTEINE_COUNT,
  PROTEINE,
  MIXIN,
  DRESSING,
  TOPPINGS,
  SIDE_DISHES,
}

export interface CheckBoxInfo {
  id: string;
  category: Category;
  top: number;
  left: number;
  isChecked?: boolean;
}

export interface CheckBoxInfoEntities {
  [index: string]: CheckBoxInfo;
}
