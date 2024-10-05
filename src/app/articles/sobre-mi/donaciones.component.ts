import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'donaciones',
  standalone: true,
  imports: [RouterLink, NgStyle],
  template: `
    <div
      class="mb-5 aspect-video h-36  md:h-44 bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-e300 text-white shadow-md shadow-black" [ngStyle]="{ 'background-image': 'url(' + imageUrl + ')' }"
    >
      <!-- Gradiente de fondo y contenido -->
      <div
        class="h-full bg-gradient-to-b from-transparent to-black flex flex-col justify-evenly hover:justify-end items-center p-2 text-center  backdrop-blur-sm hover:backdrop-blur-none  transition-all duration-300 ease-in-out "
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ``,
})
export class DonacionesComponent {
  @Input() imageUrl: string = '';
}
