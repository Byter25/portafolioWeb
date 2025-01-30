import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconLink } from '@core/models/icon-link';

@Component({
  selector: 'btn-ref',
  template: `
    <ul class="flex flex-col gap-y-3 p-2">
      @for(l of links; track l){
      <li class="flex items-center uppercase transition-all duration-300 ease-in-out bg-red-600 rounded-md shadow-md hover:bg-red-700 active:bg-red-500 shadow-black">
        <a [routerLink]="l.link" class="py-2 px-4 w-full h-full  text-white">
          <i [class]="l.icon + ' mr-4'"></i>{{ l.nombre }}
        </a>
      </li>
      }
    </ul>
  `,
  standalone: true,
  imports: [RouterLink],
})
export class BtnRefComponent {
  @Input() links!: IconLink[];
}
