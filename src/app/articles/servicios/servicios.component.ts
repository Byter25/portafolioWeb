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
      nombre: 'Landing Page',
      proposito:
        'Capturar la atención y guiar a los visitantes hacia una acción específica, como registrarse o comprar.',
      caracteristicas: [
        'Diseño simple con un CTA claro.',
        'Contenido breve resaltando beneficios.',
        'Incluye formularios y botones de acción.',
        'Enfocado en convertir visitantes en leads o ventas.',
      ],
      precio: 500,
    },
    {
      nombre: 'Blog',
      proposito:
        'Compartir contenido y fomentar la interacción con la audiencia.',
      caracteristicas: [
        'Diseño para publicación de artículos.',
        'Contenido con textos, imágenes y comentarios.',
        'Elementos como títulos, resúmenes y botones para compartir.',
        'Enfocado en generar tráfico y participación.',
      ],
      precio: 1000,
    },
    {
      nombre: 'E-commerce',
      proposito: 'Permitir la compra de productos o servicios en línea.',
      caracteristicas: [
        'Diseño centrado en la venta de productos.',
        'Incluye páginas de productos, descripciones y proceso de compra.',
        'Elementos como imágenes, descripciones y opciones de pago.',
        'Enfocado en convertir visitantes en compradores.',
      ],
      precio: 2000,
    },
  ];
}
