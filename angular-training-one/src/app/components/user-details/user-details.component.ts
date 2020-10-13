import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy, DoCheck {

// init -> DONE
// HTML -> VIEW
// Input properties changes -> DONE
// Destroy

  @Input()
  userId: number;

  user: string = '';

  constructor() {
    console.log('UserDetailsComponent -> constructor -> ', this.userId);
    this.getUserDetails();
  }

  ngOnInit() {
    console.log('UserDetailsComponent -> ngOnInit -> ', this.userId);
    this.getUserDetails();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('UserDetailsComponent -> ngOnChanges -> ', JSON.stringify(changes));
    // console.log('UserDetailsComponent -> ngOnChanges -> ', changes);
  }

  ngAfterViewInit() {
    console.log('UserDetailsComponent -> ngAfterViewInit -> ');
  }

  ngOnDestroy() {
    console.log('UserDetailsComponent -> ngOnDestroy -> ');
  }

  ngDoCheck(): void {
    console.log('UserDetailsComponent -> ngDoCheck -> ');
  }

  private getUserDetails() {

  }

}
