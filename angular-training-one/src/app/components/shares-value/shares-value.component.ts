import { Component } from '@angular/core';

@Component({
  selector: 'app-shares-value',
  templateUrl: './shares-value.component.html',
  styleUrls: ['./shares-value.component.css']
})
export class SharesValueComponent {

  price: number = 100;

  onSharePriceChange(price: number) {
    this.price = price;
  }
}
