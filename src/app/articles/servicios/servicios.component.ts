import { Component } from '@angular/core';
import { CardCharacterComponent } from './components/card-character.component';
import Merch from './components/merch.interface';

@Component({
  selector: 'page-servicios',
  templateUrl: './servicios.component.html',
  standalone: true,
  imports: [CardCharacterComponent],
})
export class ServiciosComponent {
  merchs: Merch[] = [
    {
      nombre: 'Básicas',
      proposito:
        'Son páginas web sencillas y funcionales. Generalmente son sitios informativos con pocas secciones (Inicio, Acerca de, Servicios, Contacto).',
      caracteristicas: [
        'Diseño básico o plantillas predefinidas',
        'Generalmente una sola página o hasta 5 secciones',
        'Sin funcionalidades avanzadas (formularios simples, galerías de imágenes)',
        'Optimización básica para SEO',
      ],
      usuarios: [],
      ejemplos: [],
      precio: [100, 500],
    },
    {
      nombre: 'Intermedias',
      proposito:
        'Son páginas más personalizadas con un nivel medio de desarrollo y diseño. A menudo tienen funcionalidades interactivas y múltiples secciones.',
      caracteristicas: [
        'Diseño personalizado',
        'Hasta 10 secciones o más, con navegación compleja',
        'Integración de funcionalidades como formularios avanzados, tiendas básicas (e-commerce), blogs, etc',
        'Integración con herramientas de análisis y SEO más avanzado',
        'Mayor soporte para dispositivos móviles (responsive)',
      ],
      usuarios: [],
      ejemplos: [],
      precio: [500, 1500],
    },
    {
      nombre: 'Avanzadas',
      proposito:
        'Son páginas más personalizadas con un nivel medio de desarrollo y diseño. A menudo tienen funcionalidades interactivas y múltiples secciones.',
      caracteristicas: [
        'Diseño único y avanzado, con animaciones o elementos gráficos especiales.',
        'Funcionalidades avanzadas (e-commerce con muchas funciones, membresías, plataformas interactivas).',
        'Desarrollo backend robusto para gestionar bases de datos, usuarios, pagos, etc.',
        'Integración con CRM, ERP u otros sistemas de negocio.',
        'Optimización avanzada para SEO, velocidad y seguridad.',
      ],
      usuarios: [],
      ejemplos: [
        'E-commerce',
        'plataformas educativas',
        'redes sociales',
        'marketplaces',
      ],
      precio: [1500, 2500],
    },
  ];
}
