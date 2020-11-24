import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { FoodType } from 'src/app/enums/food-type.enum';
import { Gender } from 'src/app/enums/gender.enum';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  // emailId: string = 'Richa@sharma.com';
  // address: string;

  // user: User = {
  //   emailId: '',
  //   address: '',
  //   foodType: undefined,
  //   gender: undefined,
  //   age: undefined,
  //   vehicle: {
  //     bike: false,
  //     car: false,
  //     boat: false
  //   }
  // };

  @ViewChild('userForm') userFormRef: NgForm;
  @ViewChild('emailRef') emailFormControlRef: NgModel;

  user: User;
  foodTypeClass: string;
  emailIdCharCount: number;
  pincode: number;

  readonly foodType: typeof FoodType = FoodType;
  readonly gender: typeof Gender = Gender;

  onSubmit() {
    if (this.userFormRef.invalid) {
      return;
    }

    console.log("userFormRef -> ", this.userFormRef);
    debugger;
    console.log('user -> ', this.user);
  }

  getUserDetails() {
    // Backend call
    setTimeout(() => {
      this.user = {
        emailId: 'sha.com',
        address: 'Pune',
        foodType: undefined,
        gender: Gender.Male,
        age: 27,
        vehicle: {
          bike: false,
          car: false,
          boat: true
        }
      };
      this.onEmailChange(this.user.emailId);
    }, 2000);
  }

  onEmailChange(emailId: string) {
    console.log('onEmailChange -> ', emailId);
    this.emailIdCharCount = emailId.length;
  }

  onFoodTypeChange(foodType: FoodType) {
    switch (foodType) {
      case FoodType.Veg:
        this.foodTypeClass = 'food-type-veg';
        break;
      case FoodType.NonVeg:
        this.foodTypeClass = 'food-type-non-veg';
        break;
    }
    console.log('onFoodTypeChange -> ', foodType);
  }

  enableForm() {
    this.userFormRef.form.enable();
  }

  disableForm() {
    this.userFormRef.form.disable();
  }

  enableEmailFormControl() {
    this.emailFormControlRef.control.enable();
  }

  disableEmailFormControl() {
    this.emailFormControlRef.control.disable();
  }
}
