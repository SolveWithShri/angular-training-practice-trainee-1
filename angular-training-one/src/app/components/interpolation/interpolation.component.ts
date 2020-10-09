import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
  interpolation: ['@@', '@@']
})
export class InterpolationComponent {
  
  name: string = 'Shrikant';
  phoneNumber: number = 9876543;
  isValid: boolean = true;
  user: User = {
    id: 1,
    firstName: 'Shrikant',
    lastName: 'Adhav',
    age: 27,
    avatar: '/assets/angular-logo.png'
  };

  constructor() {
    // window.onload = () => {
    //   const userNameElement = document.getElementById('user-name-placeholder');
    //   console.log(userNameElement);
    //   userNameElement.innerText = this.name;
    // };
  }

  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
}
