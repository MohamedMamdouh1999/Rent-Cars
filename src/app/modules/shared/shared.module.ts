import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';
import { CarsGroupComponent } from './components/cars-group/cars-group.component';
import { SingleCarComponent } from './components/single-car/single-car.component';
import { RouterModule } from '@angular/router';

const components = [
  NavbarComponent,
  FooterComponent,
  CarsGroupComponent
];

@NgModule({
  declarations: [
    ...components,
    ErrorComponent,
    NotFoundComponent,
    SingleCarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    ...components
  ]
})
export class SharedModule { }
