import { Component } from '@angular/core';

import { FoodType } from 'src/app/enums/food-type.enum';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-ng-for-directive-demo',
  templateUrl: './ng-for-directive-demo.component.html',
  styleUrls: ['./ng-for-directive-demo.component.css']
})
export class NgForDirectiveDemoComponent {

  foods: Food[] | any[] = [ 
    { "name": "Roti", "type": "Veg" }, 
    { "name": "Papad", "type": "Veg" }, 
    { "name": "Chicken", "type": "NonVeg" }
  ];

  foodFormValue: Food = {
    name: '',
    type: FoodType.Veg
  };

  names: string[] = ['Shrikant', 'Sumit', 'Prakash'];

  addFood() {
    this.foods.push(this.foodFormValue);
    this.foodFormValue = {
      name: '',
      type: FoodType.Veg
    };
  }

  deleteFood(index: number) {
    this.foods.splice(index, 1);
  }

  replace() {
    this.foods = [ 
      { "name": "Roti", "type": "Veg" }, 
      { "name": "Masala Papad", "type": "Veg" }, 
      { "name": "Chicken", "type": "NonVeg" }
    ];
  }

  trackByFun = (index: number, food: Food) => {
    return food.name;
  };

  replaceName() {
    this.names = JSON.parse(JSON.stringify(['Shrikant', 'Ranjan', 'Prakash']));
  }
}
