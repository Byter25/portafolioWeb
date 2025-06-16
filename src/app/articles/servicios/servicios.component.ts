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
  paginas: Merch[] =[
  {
    nombre: 'Sitio Web Informativo',
    proposito: 'Páginas diseñadas para mostrar información estática o básica de una empresa, producto o persona.',
    caracteristicas: [
      'Carga rápida y diseño responsive',
      'Optimización para buscadores (SEO)',
      'Fácil navegación y estructura clara'
    ],
    ejemplos: ['Landing page', 'Portafolio personal', 'Página institucional'],
    precio: [300, 1200]
  },
  {
    nombre: 'Sitio Web Administrable (CMS)',
    proposito: 'Páginas que permiten gestionar contenido fácilmente sin saber programar.',
    caracteristicas: [
      'Panel de administración (WordPress, Strapi, etc.)',
      'Creación de blogs, páginas o productos sin código',
      'Plugins y personalización sencilla'
    ],
    ejemplos: ['Blog personal', 'Página de noticias', 'Web de productos'],
    precio: [800, 3000]
  },
  {
    nombre: 'Web Aplicación (WebApp)',
    proposito: 'Aplicaciones que funcionan en el navegador con funcionalidades dinámicas, autenticación y base de datos.',
    caracteristicas: [
      'Desarrolladas con Angular, React o Vue',
      'Interactividad avanzada (formularios, filtros, dashboards)',
      'Conexión a APIs o bases de datos remotas'
    ],
    ejemplos: ['Sistema de reservas', 'Panel de administración', 'App de tareas'],
    precio: [2000, 10000]
  }
]
  desktop: Merch[] = [
  {
    nombre: 'Aplicación de Escritorio Nativa',
    proposito: 'Aplicaciones diseñadas para ejecutarse directamente en sistemas operativos específicos como Windows, macOS o Linux.',
    caracteristicas: [
      'Acceso completo al sistema de archivos y hardware',
      'Mayor rendimiento en tareas intensivas',
      'Integración profunda con el sistema operativo'
    ],
    ejemplos: ['Editor de video', 'Software contable', 'IDE como Visual Studio'],
    precio: [4000, 12000]
  },
  {
    nombre: 'Aplicación de Escritorio Multiplataforma',
    proposito: 'Aplicaciones construidas con tecnologías que permiten ejecutarlas en múltiples sistemas operativos con el mismo código.',
    caracteristicas: [
      'Desarrolladas con Electron, .NET MAUI o Tauri',
      'Código base compartido para Windows, macOS y Linux',
      'Ideal para herramientas administrativas o paneles'
    ],
    ejemplos: ['Slack', 'VS Code', 'Apps de gestión personal'],
    precio: [3000, 9000]
  },
  {
    nombre: 'Aplicación de Escritorio Empresarial',
    proposito: 'Software robusto para gestión interna, conectado a bases de datos o sistemas ERP.',
    caracteristicas: [
      'Orientadas a usuarios internos o administrativos',
      'Seguridad avanzada y control de acceso',
      'Procesamiento local de datos con conexión remota'
    ],
    ejemplos: ['Sistema de inventario', 'Control de producción', 'Software de RRHH'],
    precio: [5000, 15000]
  }
]
  moviles: Merch[] = [
    {
      nombre: 'Aplicación Nativa',
      proposito: 'Aplicaciones diseñadas específicamente para Android o iOS con máximo rendimiento.',
      caracteristicas: [
        'Desempeño optimizado',
        'Acceso completo a APIs y sensores del dispositivo',
        'Mejor experiencia de usuario y fluidez'
      ],
      ejemplos: ['App bancaria', 'Red social de alto rendimiento', 'Juegos móviles'],
      precio: [3000, 10000]
    },
    {
      nombre: 'Aplicación Híbrida',
      proposito: 'Apps desarrolladas con tecnologías web que funcionan dentro de una webview nativa.',
      caracteristicas: [
        'Código reutilizable para Android e iOS',
        'Desarrollo rápido y económico',
        'Ideal para MVPs o aplicaciones con lógica simple'
      ],
      ejemplos: ['App informativa', 'Catálogo de productos', 'Blog móvil'],
      precio: [2000, 6000]
    },
    {
      nombre: 'Aplicación Multiplataforma',
      proposito: 'Aplicaciones con un solo código base que se compilan como nativas en múltiples plataformas.',
      caracteristicas: [
        'Desarrolladas con Flutter, React Native o .NET MAUI',
        'Aspecto y comportamiento casi nativo',
        'Menor mantenimiento que apps separadas'
      ],
      ejemplos: ['App de delivery', 'App de reservas', 'Red social básica'],
      precio: [2500, 8000]
    }
  ]
}
