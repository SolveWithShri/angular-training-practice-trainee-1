import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change-price',
  templateUrl: './change-price.component.html',
  styleUrls: ['./change-price.component.css']
})
export class ChangePriceComponent {

  @Input()
  acpPrice: number;

  @Output()
  acpChange: EventEmitter<number> = new EventEmitter();

  incPrice() {
    this.acpPrice = this.acpPrice + this.getTenPercentPrice();
    this.acpChange.emit(this.acpPrice);
  }

  decPrice() {
    this.acpPrice = this.acpPrice - this.getTenPercentPrice();
    this.acpChange.emit(this.acpPrice);
  }

  onChange() {
    this.acpChange.emit(this.acpPrice);
  }

  private getTenPercentPrice() {
    return ((this.acpPrice * 10) / 100);
  }
}
