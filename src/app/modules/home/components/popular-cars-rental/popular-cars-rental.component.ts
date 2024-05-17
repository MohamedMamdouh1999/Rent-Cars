import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ICar } from 'src/app/modules/shared/interfaces/icar';
import { CarsService } from 'src/app/modules/shared/services/cars.service';

@Component({
  selector: 'app-popular-cars-rental',
  templateUrl: './popular-cars-rental.component.html',
  styleUrls: ['./popular-cars-rental.component.scss']
})
export class PopularCarsRentalComponent {
  cars: ICar[] = [];
  private destroySubject: Subject<void> = new Subject();

  constructor(private carsService: CarsService) { };

  ngOnInit(): void {
    this.getLimitCars();
  }

  getLimitCars(): void {
    this.carsService.getLimitCars(4).pipe(takeUntil(this.destroySubject)).subscribe({
      next: response => this.cars = response
    })
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }
}
