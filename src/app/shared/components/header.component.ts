import { Component } from '@angular/core';
import { EscribirMaquinaComponent } from './escribirMaquina.component';
import { MenuTopComponent } from './menu-top.component';
import { MenuRightComponent } from './menu-right.component';
@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [EscribirMaquinaComponent, MenuTopComponent, MenuRightComponent],
  template: `
    <!--CONTENEDOR DEL MENU DE NAVEGACION-->
    <header  class="fixed flex justify-between items-center z-20 top-0 left-0 w-full h-14 shadow-xl transition-all bg-gray-950 hover:shadow-red-600 hover:shadow-md  text-white font-bold">
      <!--DIVISION PARA EL LOGO-->
      <div class="flex">
        <img src="../../assets/logo.png" class="mx-10 h-10" />
        <escribir-maquina [textos]="textos"></escribir-maquina>
      </div>
      <menu-top [listaNav]="navList"></menu-top>
      <!-- AJUSTES
      <div>
        <ul class="flex text-2xl uppercase px-6 justify-between">
          <li class="p-2 h-16 w-16"><a href="">a</a></li>
          <li class="p-2 h-16 w-16"><a href="">a</a></li>
          <li class="p-2 h-16 w-16"><a href="">a</a></li>
        </ul>
      </div>
       -->
    </header>
    <menu-right [listaNav]="navList"></menu-right>
  `,
})
export class HeaderComponent {
  textos = ['hola soy byter' ,'developer', 'programador', 'amante de los videojuegos', 'ByterDev'];
  navList = [
    'inicio',
    'sobremi',
    'habilidades',
    'proyectos',
    'certificados',
    'contacto',
  ];
}
