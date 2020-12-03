import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('assets/jsons/users.json')
      .subscribe((response: any) => {
        this.users = response.data;
      });
  }
}
