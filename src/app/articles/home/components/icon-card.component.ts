import { FloatComponent } from '@shared/components/float.component';
import { IconCard } from '../../../core/models/icon-card.interface';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'icon-card',
  template: `
  <float>
    <h3 class="uppercase font-bold p-2 text-2xl">{{nombre}}</h3>
    <ul class="flex flex-wrap gap-3 text-sm items-center justify-evenly">
      @for(sec of iconCard; track sec){
      <li
        class="size-20 flex flex-col justify-center items-center uppercase  rounded-md shadow-md hover:shadow-[--color] hover:text-[--color] transition-colors duration-300 ease-in-out"
        style="--color: {{ sec.color }}"
      >
        <i class="text-2xl {{ sec.icon }}"></i>
        <span>{{ sec.nombre }}</span>
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
