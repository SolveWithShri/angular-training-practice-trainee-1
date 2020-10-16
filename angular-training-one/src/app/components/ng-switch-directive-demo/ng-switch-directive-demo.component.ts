import { Component } from '@angular/core';
import { Status } from 'src/app/enums/status.enum';

@Component({
  selector: 'app-ng-switch-directive-demo',
  templateUrl: './ng-switch-directive-demo.component.html',
  styleUrls: ['./ng-switch-directive-demo.component.css']
})
export class NgSwitchDirectiveDemoComponent {

  status: Status;
  readonly statusRef: typeof Status = Status;

  changeStatue(status: Status) {
    this.status = status;
  }
}
