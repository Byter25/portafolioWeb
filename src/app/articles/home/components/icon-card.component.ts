import { IconCard } from '../icon-card.interface';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'icon-card',
  template: `
  <div class="p-4 h-full w-full bg-slate-950 flex flex-col justify-evenly items-center shadow-md shadow-black hover:scale-105 hover:shadow-red-600  transition-all duration-300">
    <h3 class="uppercase font-bold p-2 text-2xl">{{nombre}}</h3>
    <ul class="flex flex-wrap gap-3 text-sm items-center justify-evenly">
      @for(sec of iconCard; track sec){
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
  imports: [],
})
export class IconCardComponent {
  @Input() nombre:string = ''
  @Input() iconCard: IconCard[] = []
}
