import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './proyectos/calculadora/calculadora.component';
import { TaskListComponent } from './proyectos/task-list/task-list.component';

export const ARTICLES_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'proyectos',
    children: [
      { path: 'calculadora', component: CalculadoraComponent },
      { path: 'tasklist', component: TaskListComponent },
    ],
  },
];
