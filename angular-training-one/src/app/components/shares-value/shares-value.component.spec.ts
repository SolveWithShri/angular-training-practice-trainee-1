import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesValueComponent } from './shares-value.component';

describe('SharesValueComponent', () => {
  let component: SharesValueComponent;
  let fixture: ComponentFixture<SharesValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharesValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
