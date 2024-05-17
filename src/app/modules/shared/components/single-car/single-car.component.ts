import { Component, Input } from '@angular/core';
import { ICar } from '../../interfaces/icar';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent {
  @Input({required: true}) car: ICar = {} as ICar;
}
