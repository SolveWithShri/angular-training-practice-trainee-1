import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomOneComponent } from './random-one.component';

describe('RandomOneComponent', () => {
  let component: RandomOneComponent;
  let fixture: ComponentFixture<RandomOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
