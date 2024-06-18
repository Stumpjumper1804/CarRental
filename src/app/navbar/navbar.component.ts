import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  donatedSum: number = 0;

  increaseDonation() {
    this.donatedSum += 10;

    // let sumAnchor = document.querySelector(".donated-sum") as HTMLElement

    // sumAnchor.innerHTML = this.donatedSum;
  }
}
