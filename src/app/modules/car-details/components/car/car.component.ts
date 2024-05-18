import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ICar } from 'src/app/modules/shared/interfaces/icar';
import { CarsService } from 'src/app/modules/shared/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {
  car: ICar = {} as ICar;
  @Input({required: true}) id: number = 0;
  private destroySubject: Subject<void> = new Subject();

  constructor(private carsService: CarsService) {};

  ngOnInit(): void {
    if(this.id){
      this.getSingleCar(this.id);
    }
    window.scrollTo(0, 0);
  }

  getSingleCar(id: number): void {
    this.carsService.getSingleCar(id).pipe(takeUntil(this.destroySubject)).subscribe({
      next: response => this.car = response
    })
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }
}
