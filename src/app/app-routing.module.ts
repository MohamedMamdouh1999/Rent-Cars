import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule) },
  { path: "all-cars", loadChildren: () => import("./modules/all-cars/all-cars.module").then(m => m.AllCarsModule) },
  { path: "car/:id", loadChildren: () => import("./modules/car-details/car-details.module").then(m => m.CarDetailsModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
