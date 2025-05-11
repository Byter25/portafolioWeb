import { Lenguaje } from '../../core/models/lenguaje';
import { Framework } from '../../core/models/framework';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { Proyect } from '../../core/models/proyect.interface';
import { CardProyectComponent } from './components/card-proyects.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'page-proyectos',
  imports: [
    FormsModule,
    CardProyectComponent,
    MatExpansionModule,
    MatCardModule,
  ],
  templateUrl: 'proyectos.component.html',
  styles: `
  input[type="checkbox"]{
    @apply hidden
  }
  i{
    font-size: 40px;
  }
  li{
    @apply hover:bg-gray-600 cursor-pointer py-1 px-2 rounded-md
  }
  `,
  standalone: true,
})
export class ProyectosComponent implements OnInit {
  selectedFrameworkIds: number[] = []; // Array para los frameworks seleccionados
  frameworks: Framework[] = [];
  lenguajes: Lenguaje[] = [];
  proyectos: Proyect[] = [];

  ngOnInit() {
    this.frameworks = [
      {
        id: 1,
        name: 'Tailwind CSS',
        icon: 'assets/svg/frameworks/tailwind-css.svg',
        LenguajesId: [2], // IDs de los lenguajes
      },
      {
        id: 2,
        name: 'Bootstrap',
        icon: 'assets/svg/frameworks/bootstrap.svg',
        LenguajesId: [1, 2, 3],
      },
      {
        id: 3,
        name: 'Spring Boot',
        icon: 'assets/svg/frameworks/spring-boot.svg',
        LenguajesId: [4],
      },
      {
        id: 4,
        name: '.NET',
        icon: 'assets/svg/frameworks/net.svg',
        LenguajesId: [5],
      },
      {
        id: 5,
        name: 'Angular',
        icon: 'assets/svg/frameworks/angular.svg',
        LenguajesId: [1, 2, 6],
      },
      {
        id: 6,
        name: 'Astro',
        icon: 'assets/svg/frameworks/astro.svg',
        LenguajesId: [3, 9],
      },
      {
        id: 7,
        name: 'Express',
        icon: 'assets/svg/frameworks/express-js.svg',
        LenguajesId: [3],
      },
    ];

    this.lenguajes = [
      { id: 1, name: 'HTML', icon: 'assets/svg/lenguajes/html.svg' },
      { id: 2, name: 'CSS', icon: 'assets/svg/lenguajes/css.svg' },
      {
        id: 3,
        name: 'JavaScript',
        icon: 'assets/svg/lenguajes/javascript.svg',
      },
      { id: 4, name: 'Java', icon: 'assets/svg/lenguajes/java.svg' },
      { id: 5, name: 'C#', icon: 'assets/svg/lenguajes/csharp.svg' },
      {
        id: 6,
        name: 'TypeScript',
        icon: 'assets/svg/lenguajes/typescript.svg',
      },
    ];

    this.proyectos = [
      {
        id: 0,
        name: 'Api DecoraHogar',
        img: 'https://concepto.de/wp-content/uploads/2023/01/Programa-de-computadora.jpg',
        descripcion: 'esto es una descripcion',
        idTipo: 1,
        idFrameworks: [4],
        repositorioGit: '',
        url: '',
      },
      {
        id: 0,
        name: 'Web DecoraHogar',
        img: 'https://erestecno.com/wp-content/uploads/2019/10/maxresdefault-3-1024x576.jpg',
        descripcion: '',
        idTipo: 1,
        idFrameworks: [1, 2, 5],
        repositorioGit: '',
        url: '',
      },
      {
        id: 0,
        name: 'Bot Disord',
        img: 'https://seolearners.com/wp-content/uploads/2021/12/discord-bot-with-node-js-1.jpg',
        descripcion: '',
        idTipo: 1,
        idFrameworks: [7],
        repositorioGit: '',
        url: '',
      },
      {
        id: 0,
        name: 'Api DecoraHogar',
        img: 'https://concepto.de/wp-content/uploads/2023/01/Programa-de-computadora.jpg',
        descripcion: 'esto es una descripcion',
        idTipo: 1,
        idFrameworks: [1, 2],
        repositorioGit: '',
        url: '',
      },
      {
        id: 0,
        name: 'Web DecoraHogar',
        img: 'https://erestecno.com/wp-content/uploads/2019/10/maxresdefault-3-1024x576.jpg',
        descripcion: '',
        idTipo: 1,
        idFrameworks: [2, 3, 4],
        repositorioGit: '',
        url: '',
      },
      {
        id: 0,
        name: 'Bot Disord',
        img: 'https://seolearners.com/wp-content/uploads/2021/12/discord-bot-with-node-js-1.jpg',
        descripcion: '',
        idTipo: 1,
        idFrameworks: [5],
        repositorioGit: '',
        url: '',
      },
    ];
  }
  // toggleFramework(frameworkId: number, event: Event) {
  //   const checked = (event.target as HTMLInputElement).checked;
  //   if (checked) {
  //     this.selectedFrameworkIds.push(frameworkId);
  //   } else {
  //     this.selectedFrameworkIds = this.selectedFrameworkIds.filter(
  //       (id) => id !== frameworkId
  //     );
  //   }
  // }

  // getSelectedLenguajes() {
  //   const selectedLenguajes: Lenguaje[] = [];
  //   this.selectedFrameworkIds.forEach((frameworkId) => {
  //     const selectedFramework = this.frameworks.find(
  //       (framework) => framework.id === frameworkId
  //     );
  //     if (selectedFramework) {
  //       selectedFramework.LenguajesId.forEach((lenguajeId) => {
  //         const lenguaje = this.lenguajes.find((l) => l.id === lenguajeId);
  //         if (lenguaje) {
  //           selectedLenguajes.push(lenguaje);
  //         }
  //       });
  //     }
  //   });
  //   return selectedLenguajes;
  // }

  // isLenguajeSelected(lenguajeId: number): boolean {
  //   return this.selectedFrameworkIds.some((frameworkId) => {
  //     const framework = this.frameworks.find((f) => f.id === frameworkId);
  //     return framework ? framework.LenguajesId.includes(lenguajeId) : false;
  //   });
  // }
}
