import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  clickMe() {
    console.log('clickMe -> called');
  }

  clickMeDouble() {
    console.log('clickMeDouble -> called');
  }

  onGenderChange(selectedValue: string) {
    console.log('onGenderChange -> called -> ', selectedValue);
  }

  onNameChange(inputValue: string) {
    console.log('onNameChange -> called -> ', inputValue);
  }

  onNameChange2(inputValue: string) {
    console.log('onNameChange2 -> called -> ', inputValue);
  }

  onKeyUp(inputValue: string) {
    console.log('onKeyUp -> called -> ', inputValue);
  }

  onClick() {
    console.log('onClick -> called -> ');
  }
}
