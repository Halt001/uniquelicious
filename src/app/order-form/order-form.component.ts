import { Component, OnInit } from '@angular/core';
import { CheckBoxInfo, Category } from './order-form.interfaces';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  constructor() {
    this.checkBoxes = this.createCheckBoxes();
  }

  checkBoxes: CheckBoxInfo[];

  ngOnInit(): void {
    //
  }
  private createCheckBoxes(): CheckBoxInfo[] {
    const checkBoxes: CheckBoxInfo[] = [];
    const yDelta = 27.1;
    const left1 = 22;
    const left2 = 287;

    // 1) Basis
    let topOffset = 232;
    let category = Category.BASIS_KIND;
    for (let i = 0; i < 3; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left1, category, id: i });
    }
    category = Category.BASIS_PROTEINE_COUNT;
    for (let i = 0; i < 2; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left2, category, id: i });
    }


    // 3) Proteïnen
    topOffset = 386;
    category = Category.PROTEINE;
    for (let i = 0; i < 4; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left1, category, id: i });
    }
    for (let i = 0; i < 4; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left2, category, id: i + 4 });
    }

    // 3) Mixin
    topOffset = 568;
    category = Category.MIXIN;
    for (let i = 0; i < 9; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left1, category, id: i });
    }
    for (let i = 0; i < 8; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left2, category, id: i + 9 });
    }

    // 4) Dressing
    topOffset = 923;
    category = Category.DRESSING;
    for (let i = 0; i < 3; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left1, category, id: i });
    }
    for (let i = 0; i < 3; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left2, category, id: i + 3 });
    }

    // 5) Toppings
    topOffset = 1117;
    category = Category.TOPPINGS;
    for (let i = 0; i < 5; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left1, category, id: i });
    }
    for (let i = 0; i < 4; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left2, category, id: i + 5 });
    }


    // 6) Toppings
    topOffset = 1362;
    category = Category.TOPPINGS;
    for (let i = 0; i < 7; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left1, category, id: i });
    }
    for (let i = 0; i < 6; ++i) {
      checkBoxes.push({ top: topOffset + i * yDelta, left: left2, category, id: i + 7 });
    }

    return checkBoxes;
  }
}
