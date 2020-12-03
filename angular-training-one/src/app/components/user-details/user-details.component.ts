import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: string;
  emailId: string;
  user = {};

  constructor(private activatedRoute: ActivatedRoute,
    private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.userId = paramMap.get('userId');
        this.getUserDetails(this.userId);
      });

    this.activatedRoute.queryParamMap
      .subscribe((paramMap: ParamMap) => {
        this.emailId = paramMap.get('emailId');
      });
  }

  getUserDetails(userId: string)  {
    this.httpClient.get(`assets/jsons/${userId}.json`)
      .subscribe((response: any) => {
        this.user = response.data;
      });
  }
}
