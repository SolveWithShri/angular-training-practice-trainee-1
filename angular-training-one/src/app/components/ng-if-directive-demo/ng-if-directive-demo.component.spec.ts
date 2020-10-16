import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirectiveDemoComponent } from './ng-if-directive-demo.component';

describe('NgIfDirectiveDemoComponent', () => {
  let component: NgIfDirectiveDemoComponent;
  let fixture: ComponentFixture<NgIfDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
