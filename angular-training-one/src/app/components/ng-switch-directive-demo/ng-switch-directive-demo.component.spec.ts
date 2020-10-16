import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDirectiveDemoComponent } from './ng-switch-directive-demo.component';

describe('NgSwitchDirectiveDemoComponent', () => {
  let component: NgSwitchDirectiveDemoComponent;
  let fixture: ComponentFixture<NgSwitchDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
