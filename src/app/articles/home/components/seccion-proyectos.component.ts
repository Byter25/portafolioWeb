import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';

@Component({
  selector: 'app-seccion-proyectos',
  imports:[RouterLink,SeccionMaxComponent],
  template: `
    <seccion-max id="proyectos">
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
    </seccion-max>
  `,
  styleUrls: ['../../../app.component.css',
  ],
  standalone: true,
})
export class SeccionProyectosComponent {}
