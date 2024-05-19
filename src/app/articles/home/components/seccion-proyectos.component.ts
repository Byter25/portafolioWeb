import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seccion-proyectos',
  imports:[RouterLink],
  template: `
    <section class="base scroll-c" id="proyectos">
      <div class="contend-max">
        <p style="font-size:1.6rem;">seccion-proyectos en proceso!</p>
        <ul class="proyectos">
          <li class="proyectos-opcion">
            <a routerLink="proyectos/calculadora">calculadora-web</a>
          </li>
          <li class="proyectos-opcion">
            <a routerLink="proyecto/tasklist">lista de tareas web</a>
          </li>
          <li class="proyectos-opcion">
            <a routerLink="proyectos/calculadora">calculadora</a>
          </li>
          <li class="proyectos-opcion">
            <a href="/calculadora">calculadora</a>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrls: ['../../../app.component.css',
  ],
  standalone: true,
})
export class SeccionProyectosComponent {}
