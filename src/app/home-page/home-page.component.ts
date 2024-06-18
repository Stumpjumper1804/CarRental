import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  cars: Array<{
    brand: string;
    model: string;
    seats: number;
    pricePerDay: number;
  }> = [
    { brand: 'Volvo', model: 'TC40', seats: 5, pricePerDay: 100 },
    { brand: 'Mazda', model: '3', seats: 5, pricePerDay: 80 },
    { brand: 'VW', model: 'Golf', seats: 5, pricePerDay: 90 },
    { brand: 'Mercedes', model: 'A200', seats: 4, pricePerDay: 120 },
  ];

  addCar = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    seats: new FormControl(''),
    pricePerDay: new FormControl(''),
  });

  onSubmit() {
    console.log(this.addCar.value);
    let newCar: any = this.addCar.value;
    this.cars.push(newCar);
    this.addCar.reset();
  }
}
