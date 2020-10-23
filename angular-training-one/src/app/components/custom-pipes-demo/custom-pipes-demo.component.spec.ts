import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesDemoComponent } from './custom-pipes-demo.component';

describe('CustomPipesDemoComponent', () => {
  let component: CustomPipesDemoComponent;
  let fixture: ComponentFixture<CustomPipesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
