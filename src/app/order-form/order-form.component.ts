import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CheckBoxInfo, Category, CheckBoxInfoEntities, BasisKind, BasisProteinCount } from './order-form.interfaces';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent implements OnInit {
  checkBoxEntities: CheckBoxInfoEntities;
  selectedKind: BasisKind;
  selectedProteinCount: BasisProteinCount;

  constructor(private cd: ChangeDetectorRef) {
    this.checkBoxEntities = this.createCheckBoxEntities();
  }


  ngOnInit(): void {
    //
  }

  clickedCheckbox(checkbox: CheckBoxInfo) {
    if (checkbox.category === Category.BASIS_KIND) {
      if (!checkbox.isChecked) {
        checkbox.isChecked = true;
        this.selectKind(checkbox);
      }
    } else if (checkbox.category === Category.BASIS_PROTEINE_COUNT) {
      if (!checkbox.isChecked) {
        checkbox.isChecked = true;
        this.selectProtein(checkbox);
      }
    } else {
      checkbox.isChecked = !checkbox.isChecked;
    }

    this.updateRestrictions();
  }

  updateRestrictions() {
    this.selectedKind = this.getSelectedKind();
    this.selectedProteinCount = this.getSelectedProteinCount();
  }

  getSelectedKind(): BasisKind {
    if (this.checkBoxEntities[this.makeId(Category.BASIS_KIND, BasisKind.BOWL)].isChecked) {
      return BasisKind.BOWL;
    }
    if (this.checkBoxEntities[this.makeId(Category.BASIS_KIND, BasisKind.BURRITO)].isChecked) {
      return BasisKind.BURRITO;
    }
    if (this.checkBoxEntities[this.makeId(Category.BASIS_KIND, BasisKind.SALAD)].isChecked) {
      return BasisKind.SALAD;
    }

    return undefined;
  }

  getSelectedProteinCount(): BasisProteinCount {
    if (this.checkBoxEntities[this.makeId(Category.BASIS_PROTEINE_COUNT, BasisProteinCount.ONE)].isChecked) {
      return BasisProteinCount.ONE;
    }
    if (this.checkBoxEntities[this.makeId(Category.BASIS_PROTEINE_COUNT, BasisProteinCount.TWO)].isChecked) {
      return BasisProteinCount.TWO;
    }

    return undefined;
  }

  private selectKind({ id, isChecked }: CheckBoxInfo) {
    if (!isChecked) {
      return;
    }

    this.checkBoxEntities[this.makeId(Category.BASIS_KIND, BasisKind.BOWL)].isChecked = false;
    this.checkBoxEntities[this.makeId(Category.BASIS_KIND, BasisKind.BURRITO)].isChecked = false;
    this.checkBoxEntities[this.makeId(Category.BASIS_KIND, BasisKind.SALAD)].isChecked = false;

    this.checkBoxEntities[id].isChecked = true;
  }

  private selectProtein({ id, isChecked }: CheckBoxInfo) {
    if (!isChecked) {
      return;
    }

    this.checkBoxEntities[this.makeId(Category.BASIS_PROTEINE_COUNT, BasisProteinCount.ONE)].isChecked = false;
    this.checkBoxEntities[this.makeId(Category.BASIS_PROTEINE_COUNT, BasisProteinCount.TWO)].isChecked = false;

    this.checkBoxEntities[id].isChecked = true;
  }

  createCheckBoxEntities(): CheckBoxInfoEntities {
    const checkBoxEntities: CheckBoxInfoEntities = {};
    const yDelta = 13.55;
    const left1 = 10;
    const left2 = 142;

    // 1) Basis
    let topOffset = 116;
    let category = Category.BASIS_KIND;
    for (let i = 0; i < 3; ++i) {
      const id = `${category}:${i}`;
      checkBoxEntities[this.makeId(category, i)] = { top: topOffset + i * yDelta, left: left1, category, id };
    }
    category = Category.BASIS_PROTEINE_COUNT;
    for (let i = 0; i < 2; ++i) {
      const id = `${category}:${i}`;
      checkBoxEntities[this.makeId(category, i)] = { top: topOffset + i * yDelta, left: left2, category, id };
    }

    // 3) Proteïnen
    topOffset = 193;
    category = Category.PROTEINE;
    for (let i = 0; i < 4; ++i) {
      const id = `${category}:${i}`;
      checkBoxEntities[this.makeId(category, i)] = { top: topOffset + i * yDelta, left: left1, category, id };
    }
    for (let i = 0; i < 4; ++i) {
      const idNumber = i + 4;
      const id = `${category}:${idNumber}`;
      checkBoxEntities[this.makeId(category, idNumber)] = { top: topOffset + i * yDelta, left: left2, category, id };
    }

    // 3) Mixin
    topOffset = 284;
    category = Category.MIXIN;
    for (let i = 0; i < 9; ++i) {
      const id = `${category}:${i}`;
      checkBoxEntities[this.makeId(category, i)] = { top: topOffset + i * yDelta, left: left1, category, id };
    }
    for (let i = 0; i < 8; ++i) {
      const idNumber = i + 9;
      const id = `${category}:${idNumber}`;
      checkBoxEntities[this.makeId(category, idNumber)] = { top: topOffset + i * yDelta, left: left2, category, id };
    }

    // 4) Dressing
    topOffset = 461;
    category = Category.DRESSING;
    for (let i = 0; i < 3; ++i) {
      const id = `${category}:${i}`;
      checkBoxEntities[this.makeId(category, i)] = { top: topOffset + i * yDelta, left: left1, category, id };
    }
    for (let i = 0; i < 3; ++i) {
      const idNumber = i + 3;
      const id = `${category}:${idNumber}`;
      checkBoxEntities[this.makeId(category, idNumber)] = { top: topOffset + i * yDelta, left: left2, category, id };
    }

    // 5) Toppings
    topOffset = 558;
    category = Category.TOPPINGS;
    for (let i = 0; i < 5; ++i) {
      const id = `${category}:${i}`;
      checkBoxEntities[this.makeId(category, i)] = { top: topOffset + i * yDelta, left: left1, category, id };
    }
    for (let i = 0; i < 4; ++i) {
      const idNumber = i + 5;
      const id = `${category}:${idNumber}`;
      checkBoxEntities[this.makeId(category, idNumber)] = { top: topOffset + i * yDelta, left: left2, category, id };
    }

    // 6) Toppings
    topOffset = 681;
    category = Category.SIDE_DISHES;
    for (let i = 0; i < 7; ++i) {
      const id = `${category}:${i}`;
      checkBoxEntities[this.makeId(category, i)] = { top: topOffset + i * yDelta, left: left1, category, id };
    }
    for (let i = 0; i < 6; ++i) {
      const idNumber = i + 7;
      const id = `${category}:${idNumber}`;
      checkBoxEntities[this.makeId(category, idNumber)] = { top: topOffset + i * yDelta, left: left2, category, id };
    }

    return checkBoxEntities;
  }

  makeId(category: Category, index: number): string {
    return `${category}:${index}`;
  }
}
