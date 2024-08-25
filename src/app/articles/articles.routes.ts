import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/seccion-contacto.component';
import { CertificadosComponent } from './certificados.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

export const ARTICLES_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServiciosComponent },
  {
    path: 'proyects',
    component: ProyectosComponent,
    loadChildren: () =>
      import('./proyectos/proyectos.routes').then((n) => n.PROYECTOS_ROUTES),
  },
  { path: 'certificates', component: CertificadosComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'about', component: SobreMiComponent},
  { path: 'privacity', component: HomeComponent },
  { path: 'cookies', component: HomeComponent },
];
