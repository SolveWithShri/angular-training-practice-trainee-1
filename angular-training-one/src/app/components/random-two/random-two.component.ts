import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

@Component({
  selector: 'app-random-two',
  templateUrl: './random-two.component.html',
  styleUrls: ['./random-two.component.css'],
  providers: [RandomService]
})
export class RandomTwoComponent implements OnInit {

  constructor(private readonly randomService: RandomService) { 
    console.log(`RandomTwoComponent -> constructor -> ${this.randomService.getValue()}`);
  }

  ngOnInit(): void {
    // const name = 'Shri';
    // if (true) {
    //   const name = 'Pune';
    //   console.log(name);
    // }
    // console.log(name);
  }

}
