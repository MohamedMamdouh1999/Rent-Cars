import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from '../interfaces/icar';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiClient: string = "https://freetestapi.com/api/v1/cars";

  constructor(private httpClient: HttpClient) { }

  getLimitCars(limit: number): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(`${this.apiClient}?limit=${limit}`);
  }

  getAllCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(this.apiClient);
  }

  getSingleCar(id: number): Observable<ICar> {
    return this.httpClient.get<ICar>(`${this.apiClient}/${id}`);
  }
}
