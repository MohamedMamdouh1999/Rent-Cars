import { Component, Input} from '@angular/core';
import { ICar } from '../../interfaces/icar';

@Component({
  selector: 'app-cars-group',
  templateUrl: './cars-group.component.html',
  styleUrls: ['./cars-group.component.scss']
})
export class CarsGroupComponent {
  @Input({required: true}) cars: ICar[] = [];
}
