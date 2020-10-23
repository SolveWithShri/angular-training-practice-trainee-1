import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-of-pipes',
  templateUrl: './basic-of-pipes.component.html',
  styleUrls: ['./basic-of-pipes.component.css']
})
export class BasicOfPipesComponent {

  nameInLC: string = 'shrikant';
  nameInUC: string = 'SHRIKANT';

  dob: Date = new Date();

  toUpperCase(value: string): string {
    return value.toUpperCase();
  }
}
