import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'meta-card',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div
      class="relative px-4 py-2 w-full min-w-[200px] aspect-video bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-300 ease-in-out text-white shadow-md shadow-black"
      [ngStyle]="{ 'background-image': 'url(' + imageUrl + ')' }"
    >
      <!-- Overlay oscuro con blur -->
      <div
        class="absolute inset-0 bg-black/30 backdrop-blur-sm hover:backdrop-blur-none h-full w-full transition-all duration-300 ease-in-out"
      >
        <!-- Contenido encima de la capa -->
        <div
          class="absolute top-0 left-0 z-10 bg-transparent flex flex-col items-center justify-evenly h-full w-full hover:pt-10 transition-all duration-300 ease-in-out "
        >
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MetaCardComponent {
  @Input() imageUrl: string = '';
}
