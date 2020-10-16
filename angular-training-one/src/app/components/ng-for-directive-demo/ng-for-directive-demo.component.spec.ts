import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirectiveDemoComponent } from './ng-for-directive-demo.component';

describe('NgForDirectiveDemoComponent', () => {
  let component: NgForDirectiveDemoComponent;
  let fixture: ComponentFixture<NgForDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
