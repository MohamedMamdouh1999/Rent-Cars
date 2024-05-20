import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarsGroupComponent } from './components/cars-group/cars-group.component';
import { SingleCarComponent } from './components/single-car/single-car.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFoundComponent,
    SingleCarComponent,
    CarsGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    CarsGroupComponent
  ]
})
export class SharedModule { }
