import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('userId')
  userIddddddd: number;

  @Input()
  user: User;

  // @Output()
  // delete: EventEmitter<number> = new EventEmitter();
  
  @Output()
  delete: EventEmitter<User> = new EventEmitter();

  // internalId: number;

  onDelete() {
    console.log('onDelete');
    this.delete.emit(this.user);
  }
}
