import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CabeceraComponent, PieDePaginaComponent],
  template: `
    <app-cabecera></app-cabecera>
    <router-outlet></router-outlet>
    <app-pie-de-pagina></app-pie-de-pagina>
  `
})
export class AppComponent {}
