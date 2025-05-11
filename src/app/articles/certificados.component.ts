import { Component } from '@angular/core';
import { Certificados } from '../core/models/seccion.interface';

@Component({
  selector: 'page-certificados',

  template: `
  <section>
  <div class="flex flex-col justify-center items-center gap-3">
      <h1 class="text-3xl font-bold tracking-widest">CERTIFICADOS</h1>
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-5"
      >
        @for(c of certificados; track c){
            <img
              src="{{ c.url }}"
              class=" w-full object-cover"
            />
          }
        </div>
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
      url: '../../assets/certificados/2clmsCertificate_pages-to-jpg-0001.jpg',
    },
    {
      id: 1,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: '../../assets/certificados/Certificate of Attendance (RH124-8.2) (1)_page-0001.jpg',
    },
    {
      id: 2,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: '../../assets/certificados/clmsCertificate_pages-to-jpg-0001.jpg',
    },
    {
      id: 3,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: '../../assets/certificados/course_certificate_DB_page-0001.jpg',
    },
    {
      id: 4,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: '../../assets/certificados/course_certificate_JAVA_page-0001.jpg',
    },
    {
      id: 5,
      titulo: 'certificado',
      descripcion: 'hola que tal descripcion',
      url: '../../assets/certificados/2clmsCertificate_pages-to-jpg-0001.jpg',
    },
  ]
}
