import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: User[] = [];
  user: User;

  // userService: UsersService = new UsersService();

  constructor(private readonly usersService: UsersService) {
  }

  ngOnInit() {
    // this.users = this.usersService.gerUsers();

    this.usersService.gerUsers()
      .subscribe((users) => {
        this.users = users;
      }, (error) => {
        console.log({error});
      });
  }

  getUserInfo(userId: number) {
    this.usersService.getUser(userId)
      .subscribe((user) => {
        this.user = user;
      }, (error) => {
      });
  }
}
