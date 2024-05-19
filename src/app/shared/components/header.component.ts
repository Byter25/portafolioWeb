import { Component } from '@angular/core';
import { EscribirMaquinaComponent } from './escribirMaquina.component';
import { MenuTopComponent } from './menuTop.component';
@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [EscribirMaquinaComponent, MenuTopComponent],
  template: `
    <!--CONTENEDOR DEL MENU DE NAVEGACION-->
    <header
      class="fixed flex justify-between items-center z-20 top-0 left-0 w-full border-solid border-2 shadow-xl transition-all bg-black border-transparent hover:border-red-600 hover:shadow-red-600 hover:shadow-lg  font-normal p-1 "
    >
      <!--DIVISION PARA EL LOGO-->
      <div class="flex">
        <img src="../../assets/logo.png" class="mx-10 h-10" />
        <escribir-maquina [textos]="textos"></escribir-maquina>
      </div>
      <menuTop [listaNav]="navList"></menuTop>
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
