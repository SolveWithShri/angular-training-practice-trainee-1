import { FoodType } from '../enums/food-type.enum';
import { Gender } from '../enums/gender.enum';

export interface User {
  emailId: string;
  address: string;
  foodType: FoodType;
  gender: Gender;
  age: number;
  vehicle: Vehicle;
}

export interface Vehicle {
  bike: boolean;
  car: boolean;
  boat: boolean;
}