import { Component, Input } from '@angular/core';
@Component({
  selector: 'social-icons',
  standalone: true,
  imports: [],
  template: `
    <ul class="flex justify-center items-center gap-3 flex-wrap">
      @for(s of socialIcons; track s){
      <li>
        <a
          [href]="s.link"
          class="hover:shadow-md p-1 h-7 w-7  rounded-md flex items-center justify-center text-white hover:scale-150 transition-all duration-300 ease-in-out"
          target="_blank" 
          [style.background-color]="s.color"
        >
          <i [class]="s.classIcon"></i>
          @if(showNombre){
          <p>{{ s.nombre }}</p>
          }
        </a>
      </li>
      }
    </ul>
  `,
})
export class SocialIconComponent {
  @Input() socialIcons: SocialIcons[] = [];
  @Input() showNombre: boolean = true;
}

export interface SocialIcons {
  nombre: string;
  link: string;
  classIcon: string;
  color: string;
}
