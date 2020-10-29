import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { User, UserResponse, UsersResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) {
  }

  gerUsers(): Observable<User[]> {
    return this.httpClient
      .get<UsersResponse>('assets/jsons/users.json')
      .pipe(map((response) => {
        return response.data;
      }));
    // return [
    //   {
    //       "id": 1,
    //       "name": "Shrikant",
    //       "age": 27,
    //       "phoneNumber": 9876543210,
    //       "emailId": "shrikant_test@gmail.com",
    //       "avatar": "/assets/user-avatar/1.png"
    //   },
    //   {
    //       "id": 2,
    //       "name": "Ashwini",
    //       "age": 30,
    //       "phoneNumber": 8881234900,
    //       "emailId": "ashwini_test@gmail.com",
    //       "avatar": "/assets/user-avatar/2.png"
    //   },
    //   {
    //       "id": 3,
    //       "name": "Mayank",
    //       "age": 44,
    //       "phoneNumber": 9872367999,
    //       "emailId": "mayank_test@gmail.com",
    //       "avatar": "/assets/user-avatar/3.png"
    //   }
    // ];
  }

  getUser(userId: number): Observable<User> {
    return this.httpClient
      .get<UserResponse>(`assets/jsons/${userId}.json`)
      .pipe(map((userResponse) => {
        return userResponse.data;
      }));
  }

  updateUser(userId: number, user: User) {
    return this.httpClient
      .put(`assets/jsons/${userId}.json`, user);
  }

  createUser(user: User) {
    return this.httpClient
      .post(`assets/jsons/users.json`, user);
  }

  deleteUser(userId: number) {
    return this.httpClient
      .delete(`assets/jsons/${userId}.json`);
  }
}
