import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'menuTop',
  standalone: true,
  imports: [NgStyle],
  template: `
    <nav class="uppercase relative">
      <ul class="flex items-center gap-6">
        @for(nav of listaNav;track nav){
          <li class="py-2 px-4 w-fit"><a href="#{{nav}}">{{nav}}</a></li>
        }
      </ul>
    </nav>
    <div
      #backdrop
      class="fixed backdrop-blur-lg bg-red-600/30 transition-all duration-300 -z-10"
      [ngStyle]="{
        left: 'var(--left)',
        top: 'var(--top)',
        width: 'var(--width)',
        height: 'var(--height)'
      }"
    ></div>
  `,
  styles: [
    `
      @import 'tailwindcss/tailwind.css';

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
  @Input() listaNav:string[] = []
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