import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

@Component({
  selector: 'app-random-three',
  templateUrl: './random-three.component.html',
  styleUrls: ['./random-three.component.css'],
  providers: [RandomService]
})
export class RandomThreeComponent implements OnInit {

  constructor(private readonly randomService: RandomService) { 
    console.log(`RandomThreeComponent -> constructor -> ${this.randomService.getValue()}`);
  }

  ngOnInit(): void {
  }

}
