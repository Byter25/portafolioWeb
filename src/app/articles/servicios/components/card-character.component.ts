import { Component, Input } from '@angular/core';
import Merch from './merch.interface';
import { FloatComponent } from '@shared/components/float.component';

@Component({
  selector: 'card-character',
  imports: [FloatComponent],
  template: `
    <h2 class="text-center p-4 text-3xl uppercase font-bold tracking-widest">
      {{ titulo }}
    </h2>
    <div class="grid grid-cols-responsive gap-5 ">
      @for(m of merchs; track m ){
      <float class="bg-gray-100 hover:bg-gray-200 dark:bg-zinc-900 dark:hover:bg-zinc-800">
        <h3 class="uppercase text-2xl font-bold text-center pb-4">
          {{ m.nombre }}
        </h3>
        <p class="font-bold text-xl">PROPOSITO</p>
        <p class="pb-4 text-sm">{{ m.proposito }}</p>
        <p class="font-bold">CARACTERISTICAS</p>
        <ul class="text-sm flex-grow">
          @for(c of m.caracteristicas; track c){
          <li class="flex  gap-3">
            <i class="fas fa-check text-green-500"></i>
            <p>{{ c }}</p>
          </li>
          }
        </ul>
        <div class="bottom-0 flex flex-col justify-center items-center p-2">
          <a class="font-bold text-sm">PRECIO:</a>
          <p class="text-green-400 text-3xl">{{ m.precio[0] }}$ - {{ m.precio[1] }}$</p>
        </div>
      </float>
      }
    </div>
  `,
  standalone: true,
})
export class CardCharacterComponent {
  @Input() titulo: string = '';
  @Input() merchs: Merch[] = [];
}
