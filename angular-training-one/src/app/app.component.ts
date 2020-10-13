import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userId: number = 1;

  showUserDetails: boolean = true;

  constructor() {
    // setTimeout(() => {
    //   this.userId = 2;
    // }, 5000);
  }

  onUserIdChange(userId) {
    this.userId = userId;
  }

  toggleUserDetails() {
    this.showUserDetails = !this.showUserDetails;

    if (this.showUserDetails) {
      console.log('IF', this.showUserDetails);
    } else {
      console.log('ELSE', this.showUserDetails);
    }
  }
}
