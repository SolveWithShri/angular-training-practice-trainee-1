import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  readonly uId: number;
  readonly user: User;

  constructor() {
    this.uId = 1;
    this.user = {
      id: 3,
      firstName: "Mayank",
      lastName: "Ag",
      age: 44,
      phoneNumber: 9872367999,
      emailId: "mayank_test@gmail.com",
      avatar: "/assets/user-avatar/3.png"
    };
  }

  onUserDelete(userId: User) {
    console.log('ParentComponent -> onUserDelete -> userId -> ', userId);
  }
}
