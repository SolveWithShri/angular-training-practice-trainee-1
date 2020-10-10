import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
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

  securityRiskValue = 'Template <script>alert("I am watching")</script> Syntax';
  
  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
}
