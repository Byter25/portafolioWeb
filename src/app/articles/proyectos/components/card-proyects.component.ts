import { Lenguaje } from '../../../core/models/lenguaje';
import { Framework } from '../../../core/models/framework';
import { Component, Input, OnInit } from '@angular/core';
import { Proyect } from '../../../core/models/proyect.interface';

@Component({
  selector: 'card-proyect',
  template: `
    <ng-container>
      <img
        [src]="dataP.img"
        alt="imagen alzada"
        class="rounded-lg shadow-md aspect-video object-cover w-full"
      />
      <div class="p-5">
        <h2 class="uppercase font-bold text-2xl dark:text-gray-100">
          {{ dataP.name }}
        </h2>
        <p class="text-neutral-800 dark:text-neutral-100">
          {{ dataP.descripcion }}
        </p>
        <ul class="inline-flex flex-wrap gap-2"></ul>
        <ul class="flex flex-wrap gap-2 mt-4"></ul>
      </div>

      <!--<p class="font-semibold text-neutral-800 dark:text-gray-300">Frameworks:</p>
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
      </div> -->
    </ng-container>
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
