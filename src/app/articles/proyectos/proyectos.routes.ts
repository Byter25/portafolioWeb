import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BinaryTraductorComponent } from './binary-traductor/binary-traductor.component';

export const PROYECTOS_ROUTES: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'tasklist', component: TaskListComponent },
  { path: 'binaryTraductor', component: BinaryTraductorComponent }
];
