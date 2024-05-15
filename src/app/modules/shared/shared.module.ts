import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';

const components = [
  NavbarComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...components,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
