import { Lenguaje } from './lenguaje';
import { Framework } from './framework';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { NgClass } from '@angular/common';

@Component({
  selector: 'page-proyectos',
  imports:[RouterLink, RouterOutlet, FormsModule, NgClass],
  templateUrl:"proyectos.component.html",
  styles:`
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
export class ProyectosComponent implements OnInit{

  selectedFrameworkIds: number[] = []; // Array para los frameworks seleccionados
  frameworks: Framework[] = []
  lenguajes: Lenguaje[]=[]

  ngOnInit(){
    this.frameworks = [
      {
        id: 1,
        name: 'Tailwind CSS',
        icon: 'assets/svg/tailwind-css.svg',
        LenguajesId: [1, 2] // IDs de los lenguajes
      },
      {
        id: 2,
        name: 'Bootstrap',
        icon: 'assets/svg/bootstrap.svg',
        LenguajesId: [1, 2, 3]
      },
      {
        id: 3,
        name: 'Spring Boot',
        icon: 'assets/svg/spring-boot.svg',
        LenguajesId: [4, 5]
      },
      {
        id: 4,
        name: '.NET',
        icon: 'assets/svg/net.svg',
        LenguajesId: [6, 7]
      },
      {
        id: 5,
        name: 'Angular',
        icon: 'assets/svg/angular.svg',
        LenguajesId: [8, 3]
      },
      {
        id: 6,
        name: 'Astro',
        icon: 'assets/svg/astro.svg',
        LenguajesId: [3, 9]
      }
    ];

    this.lenguajes= [
      { id: 1, name: 'HTML', icon: 'assets/svg/html.svg' },
      { id: 2, name: 'CSS', icon: 'assets/svg/css.svg' },
      { id: 3, name: 'JavaScript', icon: 'assets/svg/javascript.svg' },
      { id: 4, name: 'Java', icon: 'assets/svg/java.svg' },
      { id: 5, name: 'Kotlin', icon: 'assets/svg/kotlin.svg' },
      { id: 6, name: 'C#', icon: 'assets/svg/csharp.svg' },
      { id: 7, name: 'VB.NET', icon: 'assets/svg/vbnet.svg' },
      { id: 8, name: 'TypeScript', icon: 'assets/svg/typescript.svg' },
      { id: 9, name: 'Markdown', icon: 'assets/svg/markdown.svg' }
    ];
  }
  toggleFramework(frameworkId: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedFrameworkIds.push(frameworkId);
    } else {
      this.selectedFrameworkIds = this.selectedFrameworkIds.filter(id => id !== frameworkId);
    }
  }

  getSelectedLenguajes() {
    const selectedLenguajes: Lenguaje[] = [];
    this.selectedFrameworkIds.forEach(frameworkId => {
      const selectedFramework = this.frameworks.find(framework => framework.id === frameworkId);
      if (selectedFramework) {
        selectedFramework.LenguajesId.forEach(lenguajeId => {
          const lenguaje = this.lenguajes.find(l => l.id === lenguajeId);
          if (lenguaje) {
            selectedLenguajes.push(lenguaje);
          }
        });
      }
    });
    return selectedLenguajes;
  }
  isLenguajeSelected(lenguajeId: number): boolean {
    return this.selectedFrameworkIds.some(frameworkId => {
      const framework = this.frameworks.find(f => f.id === frameworkId);
      return framework ? framework.LenguajesId.includes(lenguajeId) : false;
    });
  }

}
