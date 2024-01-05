import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-menu',
    template: '',
    styleUrls: ['./menu.component.css'],
    standalone: true,
})
export class MenuComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    if (window.innerWidth >= 860) this.backdrop();

    this.maquinaEscribe(this.mostrar, this.etiqueta.nativeElement);
  }

  public mostrar: string[] = ['byter', 'developer', 'software'];
  @ViewChild('etiqueta') 'etiqueta': ElementRef;

  maquinaEscribe(palabras: string[], etiqueta: HTMLSpanElement) {
    let p1 = 0;
    let c1 = 0;
    let isDeleting = false;

    const efectoTipear = () => {
      const palabra = palabras[p1];
      const caracterActual = palabra.substring(0, c1);
      etiqueta.textContent = caracterActual; // Usa textContent en lugar de innerHTML

      if (!isDeleting && c1 < palabra.length) {
        c1++;
        setTimeout(efectoTipear, 200);
      } else if (isDeleting && c1 > 0) {
        c1--;
        setTimeout(efectoTipear, 100);
      } else {
        isDeleting = !isDeleting;
        p1 = !isDeleting ? (p1 + 1) % palabras.length : p1;
        setTimeout(efectoTipear, 1500);
      }
    };
    efectoTipear();
  }

  backdrop() {
    const liItem = document.querySelectorAll('nav li');
    const backdrop = document.querySelector('#backdrop') as HTMLElement;
    liItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        // const { clientHeight, clientWidth } = item;
        // console.log({ left, top, width, height });
        // console.log({ clientHeight, clientWidth });

        backdrop.style.setProperty('--left', `${left}px`);
        backdrop.style.setProperty('--top', `${top}px`);
        backdrop.style.setProperty('--width', `${width}px`);
        backdrop.style.setProperty('--height', `${height}px`);
        backdrop.style.opacity = '1';
        backdrop.style.visibility = 'visible';
      });
    });
  }
}
