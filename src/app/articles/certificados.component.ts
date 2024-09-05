import { Component } from '@angular/core';
import { Certificados } from '../core/models/seccion.interface';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'page-certificados',
  imports: [NgbCarouselModule],
  providers: [NgbCarouselConfig],
  template: `
  <section>
  <div class="flex flex-col justify-center items-center gap-3">
      <h1 class="text-2xl uppercase font-bold tracking-widest">certificados</h1>
      <ngb-carousel class="bg-transparent py-0 p-5" >
        @for(c of certificados; track c){
        <ng-template ngbSlide >
          <div
            class="picsum-img-wrapper flex items-center justify-center"
          >
            <img
              src="{{ c.url }}"
              class=" md:h-[400px] md:w-fit object-cover object-center pt-0  p-5 mb-5"
            />
          </div>
          <div class="carousel-caption">
            <p>{{ c.titulo }}</p>
            <p>{{ c.descripcion }}</p>
          </div>
        </ng-template>
        }
      </ngb-carousel>
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
  ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
