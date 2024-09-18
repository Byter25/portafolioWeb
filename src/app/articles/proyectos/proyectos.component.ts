import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'page-proyectos',
  imports:[RouterLink, RouterOutlet],
  template: `
      <p class=" text-4xl font-bold p-2 w-full text-center pb-5 uppercase">Proyectos</p>
      <div class="flex flex-1 flex-col md:flex-row gap-5">
        <ul class="flex flex-col gap-3">
        <li>
            <a routerLink="binaryTraductor">binaryTraductor</a>
          </li>
          <li>
            <a routerLink="calculadora">calculadora</a>
          </li>
          <li>
            <a routerLink="tasklist">to do web</a>
          </li>
        </ul>
        <div class="flex-1 ">
          <router-outlet/>
        </div>
      </div>
  `,
  styles:`
  ul{
    @apply p-2 rounded-md bg-black h-fit
  }
  li{
    @apply hover:bg-gray-600 cursor-pointer py-1 px-2
  }
  a{
    @apply py-2 px-4
  }
  `,
  standalone: true,
})
export class ProyectosComponent {}
