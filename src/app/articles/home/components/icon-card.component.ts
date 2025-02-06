import { FloatComponent } from '@shared/components/float.component';
import { IconCard } from '../../../core/models/icon-card.interface';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'icon-card',
  template: `
  <float class="" [titulo]="nombre">
    <ul class="flex flex-col flex-wrap gap-2 text-sm px-2">
      @for(sec of iconCard; track sec){
      <li
        class="w-full p-2 flex gap-2 items-center rounded-md shadow-md hover:shadow-[--color]   hover:text-[--color] transition-colors duration-300 ease-in-out peer group"
        style="--color: {{ sec.color }}"
      >
        @if(sec.icon!.startsWith("assets")){
          <img [src]="sec.icon" alt="svg" style="--color: {{ sec.color }}" class=" size-[1.875rem] group-hover:bg-[--color] transition-all  bg-zinc-800 dark:bg-transparent duration-500">
          <span>{{ sec.nombre }}</span>
        }
        @else{
        <i class="text-3xl {{ sec.icon }}"></i>
        <span>{{ sec.nombre }}</span>
        }
      </li>
      }
    </ul>
  </float>
  `,
  standalone: true,
  imports: [FloatComponent],
})
export class IconCardComponent {
  @Input() nombre:string = ''
  @Input() iconCard: IconCard[] = []
}
