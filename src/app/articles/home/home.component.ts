import { IconCard } from './icon-card.interface';
import { Component } from '@angular/core';
import { CardProfileComponent } from './components/card-me.component';
import { IconCardComponent } from './components/icon-card.component';
import { Progreso } from './progreso.interface';
import { ProgressBarComponent } from './components/process-bar.component';
import { FloatComponent } from '@shared/components/float.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``,
  standalone: true,
  imports: [CardProfileComponent, IconCardComponent, ProgressBarComponent, FloatComponent],
})
export class HomeComponent {
  tecnicas: Progreso[] = [
    { nombre: 'frontend', progreso: 82, max: 100, color: '' },
    { nombre: 'backend', progreso: 65, max: 100, color: '' },
    { nombre: 'base de datos', progreso: 76, max: 100, color: '' },
    { nombre: 'app moviles', progreso: 50, max: 100, color: '' },
    { nombre: 'app escritorio', progreso: 60, max: 100, color: '' },
  ];

  profesional: Progreso[] = [
    { nombre: 'trabajo en equipo', progreso: 83, max: 100, color: '' },
    { nombre: 'adaptabilidad', progreso: 91, max: 100, color: '' },
    { nombre: 'pensamiento analitico', progreso: 89, max: 100, color: '' },
    { nombre: 'empatia', progreso: 90, max: 100, color: '' },
  ];

  tecnologias: IconCard[] = [
    { nombre: 'node', icon: 'fa-brands fa-node-js', color: '#68A063' },
    { nombre: 'sql', icon: 'fa-solid fa-database', color: '#FCF443' },
    { nombre: 'github', icon: 'fa-brands fa-github', color: '#4078c0' },
    { nombre: 'angular', icon: 'fa-brands fa-angular', color: '#ff0000' },
  ];

  intereses: IconCard[] = [
    { nombre: 'youtube', icon: 'fa-brands fa-youtube', color: '#FF0000' },
    { nombre: 'musica', icon: 'fa-solid fa-headphones', color: '#DF01D7' },
    { nombre: 'juegos', icon: 'fa-brands fa-xbox', color: '#52b043' },
    { nombre: 'futbol', icon: 'fa-solid fa-futbol', color: '#Efb810' },
  ];
}
