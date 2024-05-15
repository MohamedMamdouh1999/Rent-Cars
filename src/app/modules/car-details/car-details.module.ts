import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailsRoutingModule } from './car-details-routing.module';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    CarDetailsRoutingModule
  ]
})
export class CarDetailsModule { }
