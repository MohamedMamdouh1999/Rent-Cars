import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarsRentalComponent } from './popular-cars-rental.component';

describe('PopularCarsRentalComponent', () => {
  let component: PopularCarsRentalComponent;
  let fixture: ComponentFixture<PopularCarsRentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCarsRentalComponent]
    });
    fixture = TestBed.createComponent(PopularCarsRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
