import { Component } from '@angular/core';
import { FoodType } from 'src/app/enums/food-type.enum';

import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-directives-basics',
  templateUrl: './directives-basics.component.html',
  styleUrls: ['./directives-basics.component.css']
})
export class DirectivesBasicsComponent {

  foods: Food[] = [];

  food: Food = {
    name: '',
    type: FoodType.Veg
  };

  addFood() {
    this.foods.push(this.food);
    this.food = {
      name: '',
      type: FoodType.Veg
    };

    let a = this.food.type === 'Veg' ? 'green' : 'red';
  }

}
