import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ICar } from 'src/app/modules/shared/interfaces/icar';
import { CarsService } from 'src/app/modules/shared/services/cars.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit, OnDestroy{
  cars: ICar[] = [];
  private destroySubject: Subject<void> = new Subject();

  constructor(private carsService: CarsService) { };

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllCars();
  }

  getAllCars(): void {
    this.carsService.getAllCars().pipe(takeUntil(this.destroySubject)).subscribe({
      next: response => this.cars = response
    })
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }
}
