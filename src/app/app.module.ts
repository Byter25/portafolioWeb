import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SeccionStartComponent } from './seccion-start/seccion-start.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ScrollCComponent } from './scroll-c/scroll-c.component';
import { SeccionMeComponent } from './seccion-me/seccion-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SeccionStartComponent,
    CalculadoraComponent,
    TaskListComponent,
    ScrollCComponent,
    SeccionMeComponent
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
