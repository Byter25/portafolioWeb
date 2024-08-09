import { Component, HostListener } from '@angular/core';
import { MenuTopComponent } from './menu-top.component';
import { MenuRightComponent } from './menu-right.component';
import { Links } from 'src/app/core/models/seccion.interface';
import { BorderIconComponent } from "../border-icon.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuTopComponent, MenuRightComponent, BorderIconComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  textos = [
    'hola soy byter',
    'developer',
    'programador',
    'amante de los videojuegos',
    'ByterDev',
  ];
  navList: Links[] = [
    { nombre: 'inicio', link: '' },
    { nombre: 'servicios', link: 'services' },
    { nombre: 'sober mi', link: 'about-me' },
    { nombre: 'contacto', link: 'contact' },
  ];

  anchoPantalla: number;

  constructor() {
    this.anchoPantalla = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.anchoPantalla = window.innerWidth;
  }
}
