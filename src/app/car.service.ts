import { Injectable } from '@angular/core';
import { CARS } from './mock-cars';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Promise<Car[]>{
    return Promise.resolve(CARS);
  }

  getCar(plateNumber: string): Promise<Car> {
    return Promise.resolve(CARS.find(car => car.plateNumber==plateNumber));
  }

}
