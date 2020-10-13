import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-price',
  templateUrl: './display-price.component.html',
  styleUrls: ['./display-price.component.css']
})
export class DisplayPriceComponent {

  @Input()
  adpPrice: number;
}
