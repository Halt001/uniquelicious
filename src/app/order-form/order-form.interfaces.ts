
export enum Category {
  BASIS_KIND,
  BASIS_PROTEINE_COUNT,
  PROTEINE,
  MIXIN,
  DRESSING,
  TOPPINGS,
  SIDE_DISHES,
}

export enum BasisKind {
  BOWL = 0,
  BURRITO = 1,
  SALAD = 2,
}

export enum BasisProteinCount {
  ONE = 0,
  TWO = 1,
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

export interface ChoiceCount {
  left: number;
  right: number;
  freeSelections: number;
}

