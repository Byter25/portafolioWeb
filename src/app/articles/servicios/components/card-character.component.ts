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
      <float [titulo]="m.nombre">
        <p class="font-bold">PROPOSITO</p>
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
          <p class="text-green-400 text-3xl">
            {{ m.precio[0] }}$ - {{ m.precio[1] }}$
          </p>
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
