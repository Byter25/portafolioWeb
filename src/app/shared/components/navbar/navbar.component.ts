import { SocialIconComponent, SocialIcons } from './../social-icons.component';
import { Component, HostListener } from '@angular/core';
import { MenuTopComponent } from './components/menu-top.component';
import { MenuRightComponent } from './components/menu-right.component';
import { Links } from '@core/models/link.interface';
import { ModeDarkComponent } from './components/mode-dark.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenuTopComponent,
    MenuRightComponent,
    ModeDarkComponent,
    SocialIconComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  textos = [
    'hola soy byter',
    'developer',
    'programador',
    'amante de los videojuegos',
    'ByterDev',
  ];
  navList: Links[] = [
    { nombre: 'inicio', link: '' },
    { nombre: 'servicios', link: 'services' },
    { nombre: 'sobre mi', link: 'about' },
    { nombre: 'contacto', link: 'contact' },
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
