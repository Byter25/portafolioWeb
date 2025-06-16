import { Component } from '@angular/core';
import { Certificados } from '@core/models/seccion.interface';

@Component({
  selector: 'page-certificados',

  template: `
  <section class="container mx-auto flex-1">
      <h1 class="text-3xl font-bold tracking-widest w-full text-center my-10">CERTIFICADOS</h1>
      <div
        class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3  gap-8 px-5"
      >
        @for(c of certificados; track c){
          <a [href]="c.url" target="_blank" class="relative group hover:scale-105 transition-transform duration-300">
                        <img
              src="{{ c.url }}"
              class=" w-full object-cover"
            />
          </a>
          }
        </div>
  </section>
  `,
  styles: ``,
  standalone: true,
})
export class CertificadosComponent {
  certificados: Certificados[] = [
    {
      id: 0,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: 'certificados/2clmsCertificate_pages-to-jpg-0001.jpg',
    },
    {
      id: 1,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: 'certificados/Certificate of Attendance (RH124-8.2) (1)_page-0001.jpg',
    },
    {
      id: 2,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: 'certificados/clmsCertificate_pages-to-jpg-0001.jpg',
    },
    {
      id: 3,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: 'certificados/course_certificate_DB_page-0001.jpg',
    },
    {
      id: 4,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: 'certificados/course_certificate_JAVA_page-0001.jpg',
    },
  ]
}
