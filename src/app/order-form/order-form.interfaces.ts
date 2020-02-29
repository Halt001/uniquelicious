
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
  top: number;
  left: number;
  category: Category;
  id: number;
  isChecked?: boolean;
}

export interface CheckBoxInfoEntities {
  [index: string]: CheckBoxInfo;
}
