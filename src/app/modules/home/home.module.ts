import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularCarsRentalComponent } from './components/popular-cars-rental/popular-cars-rental.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    PopularCarsRentalComponent,
    HowItWorksComponent,
    WhyChooseUsComponent,
    DownloadAppComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
