import { Component, HostListener } from '@angular/core';
import { EscribirMaquinaComponent } from './escribirMaquina.component';
import { MenuTopComponent } from './menu-top.component';
import { MenuRightComponent } from './menu-right.component';
import { Links } from 'src/app/core/models/seccion.interface';
@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [EscribirMaquinaComponent, MenuTopComponent, MenuRightComponent],
  template: `
    <!--CONTENEDOR DEL MENU DE NAVEGACION-->
    <header
      class="sticky flex justify-between items-center z-20 top-0 left-0 w-full h-14 shadow-xl transition-all bg-gray-950 hover:shadow-red-600 hover:shadow-md  text-white font-bold"
    >
      <!--DIVISION PARA EL LOGO-->
      <div class="flex">
        <img src="../../assets/logo.png" class="mx-2 md:mx-10 h-10" />
        <escribir-maquina [textos]="textos" />
      </div>
      @if (anchoPantalla > 1020) {
      <menu-top [listaNav]="navList"></menu-top>
      } @else {
      <menu-right [listaNav]="navList"></menu-right>
      }
    </header>
  `,
})
export class HeaderComponent {
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
    { nombre: 'proyectos', link: 'proyects' },
    { nombre: 'certificados', link: 'certify' },
    { nombre: 'contacto', link: 'contact' },
  ];
  navContacto: Links[] = [
    { nombre: 'contacto', link: 'contact' },
    { nombre: 'sobre mi', link: 'about' },
    { nombre: 'politicas', link: 'politicas' },
    { nombre: 'sobre mi', link: 'about' },
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
