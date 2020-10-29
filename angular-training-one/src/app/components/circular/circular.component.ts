import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/service/one.service';
import { TwoService } from 'src/app/service/two.service';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  constructor(private readonly oneService: OneService,
    private readonly twoService: TwoService) { }

  ngOnInit(): void {
    this.oneService.message();
    this.twoService.message();
  }

}
