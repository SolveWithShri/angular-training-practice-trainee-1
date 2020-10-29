import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

@Component({
  selector: 'app-random-one',
  templateUrl: './random-one.component.html',
  styleUrls: ['./random-one.component.css'],
  providers: [RandomService]
})
export class RandomOneComponent implements OnInit {

  constructor(private readonly randomService: RandomService) { 
    console.log(`RandomOneComponent -> constructor -> ${this.randomService.getValue()}`);
  }

  ngOnInit(): void {
    // this.randomService = new RandomService();
    // console.log(`ngOnInit -> ${this.randomService.getValue()}`);
  }

}
