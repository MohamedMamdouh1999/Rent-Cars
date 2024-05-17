import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGroupComponent } from './cars-group.component';

describe('CarsGroupComponent', () => {
  let component: CarsGroupComponent;
  let fixture: ComponentFixture<CarsGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsGroupComponent]
    });
    fixture = TestBed.createComponent(CarsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
