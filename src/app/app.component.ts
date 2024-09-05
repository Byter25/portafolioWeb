import { Component  } from '@angular/core';
import { RouterOutlet,Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

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
export class AppComponent{
  constructor(private router: Router, private titleService: Title) {
    this.setDynamicTitle();
  }

  // Función para cambiar el título basado en la ruta actual
  setDynamicTitle() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.routerState.root), // Accede al árbol de rutas activas
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        map((route) => route.snapshot.data['title']) // Obtén el título de la ruta
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(title); // Cambia el título
        } else {
          this.titleService.setTitle('ByterDev'); // Título por defecto
        }
      });
  }
}
