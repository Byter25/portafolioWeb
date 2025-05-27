import { IconCard } from '../../core/models/icon-card.interface';
import { Component } from '@angular/core';
import { CardProfileComponent } from '../sobre-mi/components/card-me.component';
import { IconCardComponent } from '../sobre-mi/components/icon-card.component';
import { Progreso } from '../../core/models/progreso.interface';
import { FloatComponent } from '@shared/components/float.component';
import { IconLink } from '@core/models/icon-link';
import { BtnRefComponent } from "../sobre-mi/components/btn-ref.component";
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``,
  standalone: true,
  imports: [CardProfileComponent, IconCardComponent, FloatComponent, BtnRefComponent,FloatComponent,TranslocoModule],
  providers: [TranslocoService],
})
export class HomeComponent {
  // tecnicas: Progreso[] = [
  //   { nombre: 'frontend', progreso: 82, max: 100, color: '' },
  //   { nombre: 'backend', progreso: 65, max: 100, color: '' },
  //   { nombre: 'base de datos', progreso: 76, max: 100, color: '' },
  //   { nombre: 'app moviles', progreso: 50, max: 100, color: '' },
  //   { nombre: 'app escritorio', progreso: 60, max: 100, color: '' },
  // ];

  // profesional: Progreso[] = [
  //   { nombre: 'trabajo en equipo', progreso: 83, max: 100, color: '' },
  //   { nombre: 'adaptabilidad', progreso: 91, max: 100, color: '' },
  //   { nombre: 'pensamiento analitico', progreso: 89, max: 100, color: '' },
  //   { nombre: 'empatia', progreso: 90, max: 100, color: '' },
  // ];

  tecnologias: IconCard[] = [
    { nombre: 'Angular Framework', icon: 'fa-brands fa-angular', color: '#ff0000' },
    { nombre: 'Microsoft Sql Server', icon: 'fa-solid fa-database', color: '#FCF443' },
    { nombre: 'Dot-Net 8.0', icon: 'assets/svg/dotnet.svg', color: '#512BD4' },
    { nombre: 'Github', icon: 'fa-brands fa-github', color: '#4078c0' },
  ];

  intereses: IconCard[] = [
    { nombre: 'Desarrollo de Paginas Web', icon: 'fa-solid fa-pager', color: '#Efb810' },
    { nombre: 'Analista de Base de datos', icon: 'fa-solid fa-database', color: '#52b043' },
    { nombre: 'Desarrollo de Apis', icon: 'fa-solid fa-server', color: '#FFFFFF' },
    { nombre: 'Desarrollo de aplicaciones de Escritorio', icon: 'fa-solid fa-desktop', color: '#DF01D7' },
  ];

  btnLinks: IconLink[] = [
    {nombre:"certificados",link:"certificates", icon:"fa fa-solid fa-file-alt"},
    {nombre:"proyectos",link:"proyects", icon:"fas fa-folder"},
    {nombre:"streams",link:"stream", icon:"fas fa-folder"},
    {nombre:"descargar cv",link:"cv-byter", icon:"fa-sharp fa-solid fa-download"},
  ]
}
