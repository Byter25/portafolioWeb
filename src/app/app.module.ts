import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SeccionStartComponent } from './seccion-start/seccion-start.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SeccionMeComponent } from './seccion-me/seccion-me.component';
import { SeccionSkillsComponent } from './seccion-skills/seccion-skills.component';
import { SeccionCertificadosComponent } from './seccion-certificados/seccion-certificados.component';
import { SeccionProyectosComponent } from './seccion-proyectos/seccion-proyectos.component';
import { SeccionContactoComponent } from './seccion-contacto/seccion-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SeccionStartComponent,
    CalculadoraComponent,
    TaskListComponent,
    SeccionMeComponent,
    SeccionSkillsComponent,
    SeccionCertificadosComponent,
    SeccionProyectosComponent,
    SeccionContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
