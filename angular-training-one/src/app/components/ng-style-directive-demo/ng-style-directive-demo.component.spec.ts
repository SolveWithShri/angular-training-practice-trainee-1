import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDirectiveDemoComponent } from './ng-style-directive-demo.component';

describe('NgStyleDirectiveDemoComponent', () => {
  let component: NgStyleDirectiveDemoComponent;
  let fixture: ComponentFixture<NgStyleDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
