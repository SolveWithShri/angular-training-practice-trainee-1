import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive-demo',
  templateUrl: './ng-if-directive-demo.component.html',
  styleUrls: ['./ng-if-directive-demo.component.css']
})
export class NgIfDirectiveDemoComponent {
  isError: boolean = true;

  setAsSuccess() {
    this.isError = false;
  }

  setAsError() {
    this.isError = true;
  }
}
