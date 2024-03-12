import { Component } from '@angular/core';
import { Certificados } from '../../../../core/models/seccion.interface';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-seccion-certificados',
  template: `
    <section
      class="base scroll-c"
      id="curriculum"
      style="--fondo: url('https://cutewallpaper.org/21/pixel-wallpaper-gif/Pixel-art-wallpaper-gif-GIF-Images-Download.gif')"
    >
      <div class="contend-ma">
        <h2 class="titleSection">certificado</h2>

        <div class="contend-cert">
          <button><</button>

          <div class="slider">
            <ul class="slider-view">
              <li
                class="slider-view-list"
                *ngFor="let c of certificados; let i = index"
              >
                <div class="slider-img">
                  <img src="{{ c.url }}" alt="" />
                </div>
                <div class="slider-info">
                  <p class="slider-info-title">{{ c.titulo }}</p>
                  <p class="slider-info-description">{{ c.descripcion }}</p>
                </div>
              </li>
            </ul>
          </div>

          <button>></button>
        </div>
      </div>
    </section>
  `,
  styleUrls: [
    './seccion-certificados.component.css',
    '../../../../app.component.css',
  ],
  standalone: true,
  imports: [NgFor],
})
export class SeccionCertificadosComponent {
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
}
