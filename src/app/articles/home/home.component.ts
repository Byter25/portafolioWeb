import { Component } from '@angular/core';
import { SeccionContactoComponent } from './components/seccion-contacto/seccion-contacto.component';
import { SeccionProyectosComponent } from './components/seccion-proyectos.component';
import { SeccionCertificadosComponent } from './components/seccion-certificados.component';
import { SeccionSkillsComponent } from './components/seccion-skills/seccion-skills.component';
import { SeccionMeComponent } from './components/seccion-me/seccion-me.component';
import { SeccionStartComponent } from './components/seccion-start/seccion-start.component';
import { MainMaxComponent } from 'src/app/shared/components/main-max.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles:``,
    standalone: true,
    imports: [SeccionStartComponent, SeccionMeComponent, SeccionSkillsComponent, SeccionCertificadosComponent, SeccionProyectosComponent, SeccionContactoComponent,MainMaxComponent]
})
export class HomeComponent {
  bajar(){
    console.log("preciono el boton alv")
  }
}
