import { Component, Input } from '@angular/core';
@Component({
  selector: 'border-icon',
  standalone: true,
  imports: [],
  template: `
  <a [href]="link" class="flex gap-3 justify-center items-center py-1 px-4 hover:shadow-md h-10 min-w-10 rounded-md" [style.background-color]="color"  role="button"  target="_blank">
    <ng-content>
    </ng-content>
    <span class="hidden xl:block uppercase font-mono font-bold">{{nombre}}</span>
  </a>

  `,
})
export class BorderIconComponent {
@Input() link:string = "";
@Input() color:string ="";
@Input() nombre:string ="";
}
