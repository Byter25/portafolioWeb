import { Component, Input } from '@angular/core';
import Merch from './merch.interface';

@Component({
  selector: 'card-character',
  template: `
    <h2 class="text-center p-4 text-3xl uppercase font-bold tracking-widest">{{ titulo }}</h2>
    <div class="flex flex-col md:flex-row md:w-screen flex-1 md:justify-evenly gap-y-5">
      @for(m of merchs; track m ){
      <div class="bg-black rounded-lg p-4 max-w-80 md:min-h-[500px] flex flex-col justify-evenly">
        <h3 class="uppercase text-2xl font-bold text-center pb-4">
          {{ m.nombre }}
        </h3>
        <p class="font-bold text-xl">PROPOSITO</p>
        <p class="pb-4 text-sm">{{ m.proposito }}</p>
        <p class="font-bold">CARACTERISTICAS</p>
        <ul class="text-sm">
          @for(c of m.caracteristicas; track c){
          <li class="flex  gap-3">
            <i class="fas fa-check text-green-500"></i>
            <p>{{ c }}</p>
          </li>
          }
        </ul>
        <div
          class="bottom-0 flex flex-col justify-center items-center p-2"
        >
          <a class="font-bold text-sm">PRECIO:</a>
          <p class="text-green-400 text-3xl">{{ m.precio }}$</p>
        </div>
      </div>
      }
    </div>
  `,
  standalone: true,
  imports: [],
})
export class CardCharacterComponent {
  @Input() titulo: string = '';
  @Input() merchs: Merch[] = [];
}
