import { Component, Input } from '@angular/core';
import Merch from './merch.interface';
import { FloatComponent } from '@shared/components/float.component';

@Component({
  selector: 'card-character',
  imports: [FloatComponent],
  template: `
<!-- Título -->
<h2 class="text-center my-6 text-3xl font-bold tracking-widest uppercase text-neutral-900 dark:text-zinc-100">
  {{ titulo }}
</h2>

<!-- Contenedor de tarjetas -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  @for(m of merchs; track m){
  <float [titulo]="m.nombre" class=" rounded-2xl shadow-md bg-white text-neutral-900 dark:bg-zinc-900 dark:text-white transition-colors duration-300">
    
    <!-- Propósito -->
    <p class="text-xs font-semibold tracking-widest text-neutral-500 dark:text-gray-400 mb-1 uppercase">PROPÓSITO</p>
    <p class="pb-4 text-base leading-relaxed text-neutral-800 dark:text-zinc-200">{{ m.proposito }}</p>

    <!-- Características -->
    <p class="text-xs font-semibold tracking-widest text-neutral-500 dark:text-gray-400 mb-1 uppercase">CARACTERÍSTICAS</p>
    <ul class="list-disc pl-5 mb-4 space-y-1 text-neutral-800 dark:text-zinc-100">
      @for(c of m.caracteristicas; track c){
      <li><p>{{ c }}</p></li>
      }
    </ul>

    <!-- Ejemplos -->
    <p class="text-xs font-semibold tracking-widest text-neutral-500 dark:text-gray-400 mb-1 uppercase">EJEMPLOS</p>
    <ul class="list-disc pl-5 mb-4 space-y-1 text-neutral-800 dark:text-zinc-100">
      @for(e of m.ejemplos; track e){
      <li><p>{{ e }}</p></li>
      }
    </ul>

    <!-- Precio -->
    <div class="text-center mt-4">
      <p class="text-xs font-bold uppercase text-neutral-500 dark:text-gray-300">RANGO</p>
      <p class="text-2xl font-bold tracking-wide text-green-600 dark:text-green-400">
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
