import { Lenguaje } from '../../../core/models/lenguaje';
import { Framework } from '../../../core/models/framework';
import { Component, Input, OnInit } from '@angular/core';
import { Proyect } from '../../../core/models/proyect.interface';

@Component({
  selector: 'card-proyect',
  template: `
    <article
      class="h-full dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex-col p-3 flex gap-y-3 md:w-80 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <h3 class="uppercase font-bold text-xl dark:text-gray-100">
        {{ dataP.name }}
      </h3>
      <img [src]="dataP.img" alt="imagen alzada" class="rounded-lg shadow-md aspect-video" />
      <p class="text-gray-700 dark:text-gray-300">{{ dataP.descripcion }}</p>
      <p class="font-semibold text-gray-800 dark:text-gray-300">Frameworks:</p>
      <div class="flex gap-5">

        @for(f of frameworksProyect; track f.id){

        <img [src]="f.icon" [alt]="f.name" class="size-" />
        }
      </div>
      <p class="font-semibold text-gray-800 dark:text-gray-300">Lenguajes:</p>
      <div class="flex gap-5 flex-wrap">
        @for(l of lenguajesProyect; track l.id){
        <img [src]="l.icon" [alt]="l.name" class="w-8 h-8" />
        }
      </div>
    </article>
  `,
  styles: ``,
  imports: [],
  standalone: true,
})
export class CardProyectComponent implements OnInit {
  @Input() dataP!: Proyect;
  @Input() frameworks!: Framework[];
  @Input() lenguajes!: Lenguaje[];

  frameworksProyect: Framework[] = [];
  lenguajesProyect: Lenguaje[] = [];
  ngOnInit(): void {
    this.buscarFrameworksYLenguajes();
  }

  buscarFrameworksYLenguajes() {
    // Filtrar frameworks que correspondan a los IDs del proyecto
    this.frameworksProyect = this.frameworks.filter((fw) =>
      this.dataP.idFrameworks.includes(fw.id)
    );

    // Filtrar lenguajes que correspondan a los lenguajes de los frameworks encontrados
    const idsLenguajes = new Set(
      this.frameworksProyect.flatMap((fw) => fw.LenguajesId)
    ); // IDs únicos de lenguajes
    this.lenguajesProyect = this.lenguajes.filter((lang) =>
      idsLenguajes.has(lang.id)
    );
  }
}
