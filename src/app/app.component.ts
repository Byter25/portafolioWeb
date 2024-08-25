import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-100%)' // El contenido comenzará desplazado hacia arriba
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)' // Posición final
      })),
      transition('void => *', [
        animate('1s ease-out') // Controla la duración y el tipo de animación
      ]),
    ]),
  ],
})
export class AppComponent {}
