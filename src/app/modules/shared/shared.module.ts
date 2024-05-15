import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

const modules = [
  BrowserModule,
  AppRoutingModule
];

const components = [
  NavbarComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...components,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    ...modules,
    CommonModule
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule { }
