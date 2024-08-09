import { Component } from '@angular/core';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';
import { Intereses } from 'src/app/core/models/seccion.interface';
@Component({
  selector: 'intereses',
  template: `
  <div class="p-4 h-full w-full bg-slate-950 flex flex-col justify-evenly  shadow-md shadow-black hover:scale-105 hover:shadow-red-700 hover:shadow-lg transition-all duration-300">
    <h3 class="uppercase font-bold">intereses</h3>
    <ul class="flex flex-wrap gap-3 text-sm items-center justify-between w-full">
      @for(sec of intereses; track sec){
      <li
        class="h-20 w-20 flex flex-col justify-center items-center uppercase bg-black rounded-md shadow-md hover:shadow-[--color] hover:text-[--color] transition-all duration-300 ease-in-out"
        style="--color: {{ sec.color }}"
      >
        <i class="text-2xl {{ sec.icon }}"></i>
        <span>{{ sec.nombre }}</span>
      </li>
      }
    </ul>
  </div>
  `,
  standalone: true,
  imports: [SeccionMaxComponent],
})
export class InteresesComponent {
  intereses: Intereses[] = [
    { nombre: 'node', icon: 'fa-brands fa-node-js', color: '#68A063' },
    { nombre: 'sql', icon: 'fa-solid fa-database', color: '#FCF443' },
    { nombre: 'github', icon: 'fa-brands fa-github', color: '#4078c0' },
    {
      nombre: 'youtube',
      icon: 'fa-brands fa-youtube',
      color: '#FF0000',
    },
    {
      nombre: 'musica',
      icon: 'fa-solid fa-headphones',
      color: '#DF01D7',
    },
    { nombre: 'juegos', icon: 'fa-brands fa-xbox', color: '#52b043' },
    {
      nombre: 'windows',
      icon: 'fa-brands fa-windows',
      color: '#0078D4',
    },
    { nombre: 'futbol', icon: 'fa-solid fa-futbol', color: '#Efb810' },
    { nombre: 'angular', icon: 'fa-brands fa-angular', color: '#ff0000' },
  ];
}
