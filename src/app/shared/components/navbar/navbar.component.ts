import { SocialIconComponent, SocialIcons } from './../social-icons.component';
import { Component, HostListener } from '@angular/core';
import { MenuTopComponent } from './components/menu-top.component';
import { MenuRightComponent } from './components/menu-right.component';
import { Links } from '@core/models/link.interface';
import { ModeDarkComponent } from './components/mode-dark.component';
import { MatIcon } from '@angular/material/icon';
import { TranslocoService } from '@ngneat/transloco';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectLenguajeComponent } from './components/select-lenguajes.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenuTopComponent,
    MenuRightComponent,
    ModeDarkComponent,
    SocialIconComponent,
    MatIcon,
    FormsModule,
    SelectLenguajeComponent
],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  textos = [
    'textos.saludo',
    'textos.developer',
    'textos.programador',
    'textos.gamer',
    'textos.nombre',
  ];

  navList: Links[] = [
    { nombre: 'nav.inicio', link: '' },
    { nombre: 'nav.servicios', link: 'services' },
    { nombre: 'nav.sobre_mi', link: 'about' },
    { nombre: 'nav.contacto', link: 'contact' },
  ];

  faIcons: SocialIcons[] = [
    {
      nombre: 'Facebook',
      link: 'https://www.facebook.com/Byter25',
      classIcon: 'fab fa-facebook-f',
      color: '#0165E1',
    },
    {
      nombre: 'GitHub',
      link: 'https://github.com/Byter25',
      classIcon: 'fab fa-github',
      color: '#333',
    },
    {
      nombre: 'Discord',
      link: 'https://discord.gg/bqpf664AfF',
      classIcon: 'fab fa-discord',
      color: '#7289da',
    },
    {
      nombre: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bryan-alexander-chacaliaza-saavedra-217810256',
      classIcon: 'fab fa-linkedin-in',
      color: '#0073B1',
    },
    {
      nombre: 'YouTube',
      link: 'https://youtube.com/@byter25xd?si=IKCfsTR__SH6eAic',
      classIcon: 'fab fa-youtube',
      color: '#ff0000',
    },
  ];

  anchoPantalla: number;

  constructor() {
    this.anchoPantalla = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.anchoPantalla = window.innerWidth;
  }


}
