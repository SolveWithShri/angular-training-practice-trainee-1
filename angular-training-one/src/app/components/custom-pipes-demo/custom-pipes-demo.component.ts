import { Component } from '@angular/core';
import { SortOrder } from 'src/app/enums/sort-order.enum';

@Component({
  selector: 'app-custom-pipes-demo',
  templateUrl: './custom-pipes-demo.component.html',
  styleUrls: ['./custom-pipes-demo.component.css']
})
export class CustomPipesDemoComponent {

  names: string[] = [
    'Shrikant',
    'Sumit',
    'Amit',
    'Richa',
    'Mahi'
  ];
  nameSortOrder: SortOrder = SortOrder.ASC;

  // readonly sortOrder: typeof SortOrder = SortOrder;
  
  changeSortOrder() {
    if (this.nameSortOrder === SortOrder.ASC) {
      this.nameSortOrder = SortOrder.DESC;
    } else {
      this.nameSortOrder = SortOrder.ASC;
    }
  }

  addName() {
    this.names.push('Ravi');
    // this.names = [
    //   'Shrikant',
    //   'Sumit',
    //   'Amit',
    //   'Richa',
    //   'Mahi',
    //   'Ravi'
    // ];
  }

  // sortNames() {
  //   this.names = this.names.sort();
  // }
}
