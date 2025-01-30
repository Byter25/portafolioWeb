import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./articles/articles.routes').then((n) => n.ARTICLES_ROUTES),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.routes').then((n) => n.PAGES_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin.routes').then((n) => n.ADMIN_ROUTES),
  },
];
