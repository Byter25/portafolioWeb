import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { BinaryTraductorComponent } from './components/binary-traductor/binary-traductor.component';

export const PROYECTOS_ROUTES: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'tasklist', component: TaskListComponent },
  { path: 'binaryTraductor', component: BinaryTraductorComponent }
];
