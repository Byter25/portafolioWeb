import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, map, take, timer } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth >= 860) {
      this.backdrop();
    }
    this.itera();
  }

  public texto: string = 'Byter';
  public mostrar: string[] = ['byter', 'developer', 'software'];
  public char: number = 10;
  @ViewChild('muestra') 'muestra': ElementRef;
  itera() {
    const obs$ = interval(5000);
    let actual = '';
    obs$
      .pipe(map((value) => this.mostrar[value % this.mostrar.length]))
      .subscribe((value) => {
        actual = value;
        this.texto = actual
      });
  }
  backdrop() {
    const liItem = document.querySelectorAll('nav li');
    const backdrop = document.querySelector('#backdrop') as HTMLElement;
    liItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        const { clientHeight, clientWidth } = item;
        console.log({ left, top, width, height });
        console.log({ clientHeight, clientWidth });

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

export function escribir() {
  const element = document.querySelector('.menu-lado spam') as HTMLSpanElement;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // element.style.animation{
        //   typing 3s steps(5),
        //   blinking .75s infinite step-end alternate;
        // }
      } else {
        // element.style.animation{null}
      }
    });
  });
  // Inicia la observación del elemento objetivo
  observer.observe(element);
}
