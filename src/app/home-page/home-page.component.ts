import { Component } from '@angular/core';

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
}
