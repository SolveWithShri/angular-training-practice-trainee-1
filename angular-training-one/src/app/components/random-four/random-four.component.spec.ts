import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFourComponent } from './random-four.component';

describe('RandomFourComponent', () => {
  let component: RandomFourComponent;
  let fixture: ComponentFixture<RandomFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
