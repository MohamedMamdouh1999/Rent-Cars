import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCarsRoutingModule } from './all-cars-routing.module';
import { AllCarsComponent } from './components/all-cars/all-cars.component';

@NgModule({
  declarations: [
    AllCarsComponent
  ],
  imports: [
    CommonModule,
    AllCarsRoutingModule
  ]
})
export class AllCarsModule { }
