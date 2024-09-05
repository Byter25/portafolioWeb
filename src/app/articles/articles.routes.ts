import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/seccion-contacto.component';
import { CertificadosComponent } from './certificados.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';


export const ARTICLES_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServiciosComponent,data: {title: 'ByterDev - Servicios'}},
  {
    path: 'proyects',
    component: ProyectosComponent,
    loadChildren: () =>
      import('./proyectos/proyectos.routes').then((n) => n.PROYECTOS_ROUTES),data: {title: 'ByterDev - Proyectos'}
  },
  { path: 'certificates', component: CertificadosComponent, data: {title: 'ByterDev - Certifiacdos'}},
  { path: 'contact', component: ContactoComponent, data: {title: 'ByterDev - Contacto'}},
  { path: 'about', component: SobreMiComponent, data: {title: 'ByterDev - AcercaDe'}},
  { path: 'privacity', component: HomeComponent, data: {title: 'ByterDev'} },
  { path: 'cookies', component: HomeComponent, data: {title: 'ByterDev'} },
];
