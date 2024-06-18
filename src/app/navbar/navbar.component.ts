import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  donatedSum: number = 0;
  message?: string = 'Congratulations! You are a VIP!';
  increaseDonation() {
    this.donatedSum += 10;
  }
}
