import { Component } from '@angular/core';
import { SeccionMeComponent } from './seccion-me/seccion-me.component';
import { SeccionStartComponent } from './seccion-start/seccion-start.component';
import { MainMaxComponent } from 'src/app/shared/components/main-max.component';
import { BorderIconComponent } from 'src/app/shared/components/border-icon.component';
import { Intereses } from 'src/app/core/models/seccion.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles:``,
    standalone: true,
    imports: [SeccionStartComponent, SeccionMeComponent,MainMaxComponent,BorderIconComponent]
})
export class HomeComponent {
  bajar(){
    console.log("preciono el boton alv")
  }
  intereses: Intereses[] = [
    { nombre: 'node', icon: 'fa-brands fa-node-js', color: '#68A063' },
    { nombre: 'sql', icon: 'fa-solid fa-database', color: '#FCF443' },
    { nombre: 'github', icon: 'fa-brands fa-github', color: '#4078c0' },
    {
      nombre: 'youtube',
      icon: 'fa-brands fa-youtube',
      color: '#FF0000',
    },
    {
      nombre: 'musica',
      icon: 'fa-solid fa-headphones',
      color: '#DF01D7',
    },
    { nombre: 'juegos', icon: 'fa-brands fa-xbox', color: '#52b043' },
    {
      nombre: 'windows',
      icon: 'fa-brands fa-windows',
      color: '#0078D4',
    },
    { nombre: 'futbol', icon: 'fa-solid fa-futbol', color: '#Efb810' },
    { nombre: 'angular', icon: 'fa-brands fa-angular', color: '#ff0000' },
  ];
}
