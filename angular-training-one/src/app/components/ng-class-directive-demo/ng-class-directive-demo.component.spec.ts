import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassDirectiveDemoComponent } from './ng-class-directive-demo.component';

describe('NgClassDirectiveDemoComponent', () => {
  let component: NgClassDirectiveDemoComponent;
  let fixture: ComponentFixture<NgClassDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
