import { Component, Input } from '@angular/core';
@Component({
  selector: 'border-icon',
  standalone: true,
  imports: [],
  template: `
    <a
      [href]="link"
      class=" hover:shadow-md p-1 h-7 w-7  rounded-md flex items-center justify-center"
      [style.background-color]="color"
      role="button"
      target="_blank"
    >
      <ng-content> </ng-content>
      @if(!nombre){
      {{ nombre }}
      }
    </a>
  `,
})
export class BorderIconComponent {
  @Input() link: string = '';
  @Input() color: string = '';
  @Input() nombre: string = '';
}
