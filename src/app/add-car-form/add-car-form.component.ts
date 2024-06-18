import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrl: './add-car-form.component.css',
})
export class AddCarFormComponent {
  addCar = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    seats: new FormControl('', Validators.required),
    pricePerDay: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.addCar.value);
    let newCar = this.addCar.value;
    // this.cars.push(newCar);
  }
}
