import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOfPipesComponent } from './basic-of-pipes.component';

describe('BasicOfPipesComponent', () => {
  let component: BasicOfPipesComponent;
  let fixture: ComponentFixture<BasicOfPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOfPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOfPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
