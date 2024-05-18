import { NgModule } from '@angular/core';
import { AllCarsRoutingModule } from './all-cars-routing.module';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AllCarsComponent
  ],
  imports: [
    AllCarsRoutingModule,
    SharedModule
  ]
})
export class AllCarsModule { }
