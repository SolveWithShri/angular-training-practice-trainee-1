import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesBasicsComponent } from './directives-basics.component';

describe('DirectivesBasicsComponent', () => {
  let component: DirectivesBasicsComponent;
  let fixture: ComponentFixture<DirectivesBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
