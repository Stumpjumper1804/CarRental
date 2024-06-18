import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  addCar = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    seats: new FormControl(''),
    pricePerDay: new FormControl(''),
  });

  onSubmit() {
    alert('Your meesage has been sent!');
  }
}
