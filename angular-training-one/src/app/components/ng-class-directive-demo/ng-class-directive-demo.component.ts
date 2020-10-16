import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive-demo',
  templateUrl: './ng-class-directive-demo.component.html',
  styleUrls: ['./ng-class-directive-demo.component.css']
})
export class NgClassDirectiveDemoComponent {

  isError: boolean = true;

  classInString: string;
  classInArray: string[];
  classInObject: Object;

  setAsSuccess() {
    this.isError = false;
    // this.classInString = 'success';
    // this.classInString = 'success italic';
    // this.classInArray = ['success', 'italic'];
    this.classInObject = {
      'success': true,
      'italic': true
    }
  }

  setAsError() {
    this.isError = true;
    // this.classInString = 'error';
    // this.classInString = 'error bolder';
    // this.classInArray = ['error', 'bolder'];
    this.classInObject = {
      'error': true,
      'bolder': true
    }
  }
}
