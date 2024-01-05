import { AfterViewInit, Component } from '@angular/core';
import { Skills } from '../../seccion.interface';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-seccion-skills',
    templateUrl: './seccion-skills.component.html',
    styleUrls: ['./seccion-skills.component.css', '../../app.component.css'],
    standalone: true,
    imports: [NgFor],
})
export class SeccionSkillsComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.elemento();
  }

  elemento() {
    const element = document.querySelector('#activa') as HTMLDivElement;
    const barras = document.querySelectorAll('.progreso');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          barras.forEach((barra) => {
            barra.classList.add('anima');
          });
        } else {
          barras.forEach((barra) => {
            barra.classList.remove('anima');
          });
        }
      });
    });
    // Inicia la observación del elemento objetivo
    observer.observe(element);
  }

  tecnicas: Skills[] = [
    { id: 1, skill: 'html-css', progreso: '82%' },
    { id: 2, skill: 'javascript', progreso: '70%' },
    { id: 3, skill: 'python', progreso: '76%' },
    { id: 4, skill: 'java', progreso: '63%' },
    { id: 5, skill: 'sql', progreso: '72%' },
  ];

  profesional: Skills[] = [
    { id: 1, skill: 'trabajo en equipo', progreso: '83%' },
    { id: 2, skill: 'adaptabilidad', progreso: '91%' },
    { id: 3, skill: 'pensamiento analitico', progreso: '89%' },
    { id: 4, skill: 'empatia', progreso: '90%' },
    { id: 5, skill: 'a', progreso: '60%' },
  ];
}
