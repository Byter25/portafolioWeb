import { Routes } from '@angular/router';
import { HomeComponent } from './articles/home/home.component';
import { CalculadoraComponent } from './articles/proyectos/calculadora/calculadora.component';
import { TaskListComponent } from './articles/proyectos/task-list/task-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./articles/articles.routes').then((n) => n.ARTICLES_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin.routes').then((n) => n.ADMIN_ROUTES),
  },
];
