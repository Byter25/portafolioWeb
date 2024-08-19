import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'donaciones',
  standalone: true,
  imports: [RouterLink, NgStyle],
  template: `
    <div
      class="mb-5 aspect-video bg-cover bg-center rounded-3xl transition-all duration-30 text-white" [ngStyle]="{ 'background-image': 'url(' + imageUrl + ')' }"
    >
      <!-- Gradiente de fondo y contenido -->
      <div
        class="h-full bg-gradient-to-b from-transparent to-black flex flex-col justify-end items-center p-4 text-center transition-all duration-300 ease-in-out backdrop-blur-sm hover:backdrop-blur-none rounded-3xl"
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
