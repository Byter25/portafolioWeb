import { NgStyle } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Links } from '@core/models/link.interface';

@Component({
  selector: 'menu-top',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterLinkActive],
  template: `
    <div
        #backdrop
        class="fixed backdrop-blur-lg bg-gray-200 dark:bg-zinc-800 border-1 border-red-300 dark:border-red-800 rounded-2xl transition-all duration-300 "
        [ngStyle]="{
          left: 'var(--left)',
          top: 'var(--top)',
          width: 'var(--width)',
          height: 'var(--height)'
        }"
      ></div>
      <ul class="sticky flex items-center uppercase font-bold tracking-widest bg-transparent gap-2">
        @for(nav of listaNav;track nav){
        <li
          class="px-4 py-2 hover:text-red-600 transition-all"
          routerLinkActive="text-red-600"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a [routerLink]="nav.link">{{ nav.nombre }}</a>
        </li>
        }
      </ul>
  `,
  styles: [
    `
      #slidebar-checker:checked ~ .slidebar {
        left: -100%;
      }
      .backdrop {
        left: var(--left);
        top: var(--top);
        width: var(--width);
        height: var(--height);
      }
    `,
  ],
})
export class MenuTopComponent implements AfterViewInit {
  @ViewChild('backdrop') backdrop: ElementRef | undefined;
  @Input() listaNav: Links[] = [];
  ngAfterViewInit(): void {
    this.backdroFuntion();
  }

  backdroFuntion() {
    // Obtener los elementos del menú
    const menuItems = document.querySelectorAll('nav li');
    // Añadir un evento de mouseenter a cada elemento
    menuItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        // Obtener las dimensiones y la posición del elemento
        const { left, top, width, height } = item.getBoundingClientRect();
        // Cambiar las propiedades del elemento que se va a mover y cambiar de tamaño
        this.backdrop?.nativeElement.style.setProperty('--left', `${left}px`);
        this.backdrop?.nativeElement.style.setProperty('--top', `${top}px`);
        this.backdrop?.nativeElement.style.setProperty('--width', `${width}px`);
        this.backdrop?.nativeElement.style.setProperty(
          '--height',
          `${height}px`
        );
      });
    });
  }
}
