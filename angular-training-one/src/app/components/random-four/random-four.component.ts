import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/service/random.service';

@Component({
  selector: 'app-random-four',
  templateUrl: './random-four.component.html',
  styleUrls: ['./random-four.component.css']
})
export class RandomFourComponent implements OnInit {

  constructor(private readonly randomService: RandomService) { 
    console.log(`RandomFourComponent -> constructor -> ${this.randomService.getValue()}`);
  }

  ngOnInit(): void {
  }

}
