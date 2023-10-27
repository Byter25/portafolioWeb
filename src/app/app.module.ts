import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeccionStartComponent } from './components/seccion-start/seccion-start.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SeccionMeComponent } from './components/seccion-me/seccion-me.component';
import { SeccionSkillsComponent } from './components/seccion-skills/seccion-skills.component';
import { SeccionCertificadosComponent } from './components/seccion-certificados/seccion-certificados.component';
import { SeccionProyectosComponent } from './components/seccion-proyectos/seccion-proyectos.component';
import { SeccionContactoComponent } from './components/seccion-contacto/seccion-contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
    HomeComponent,
    DashboardComponent,
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
