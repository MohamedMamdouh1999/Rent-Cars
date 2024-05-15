import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCarsComponent } from './components/all-cars/all-cars.component';

const routes: Routes = [
  { path: "", component: AllCarsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCarsRoutingModule { }
