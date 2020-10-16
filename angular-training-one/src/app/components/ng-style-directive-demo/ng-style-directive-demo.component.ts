import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive-demo',
  templateUrl: './ng-style-directive-demo.component.html',
  styleUrls: ['./ng-style-directive-demo.component.css']
})
export class NgStyleDirectiveDemoComponent {

  isError: boolean = true;
  color: string;
  fontStyle: string;
  styleInObject: Object;

  setAsSuccess() {
    this.isError = false;
    // this.color = 'green';
    // this.fontStyle = 'italic';
    this.styleInObject = {
      'color': 'green',
      'font-style': 'italic'
    };
  }

  setAsError() {
    this.isError = true;
    // this.color = 'red';
    // this.fontStyle = 'normal';    
    this.styleInObject = {
      'color': 'red',
      'font-style': 'normal'
    };
  }
}
