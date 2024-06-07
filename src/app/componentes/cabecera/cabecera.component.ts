import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  menuIcon = 'fa fa-bars';
  menuValue = false;

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menuIcon = this.menuValue ? 'fa fa-times' : 'fa fa-bars';
  }

  closeMenu() {
    this.menuValue = false;
    this.menuIcon = 'fa fa-bars';
  }
}
