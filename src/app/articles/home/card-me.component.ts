import { Component } from '@angular/core';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';
import { EscribirMaquinaComponent } from 'src/app/shared/components/escribirMaquina.component';
@Component({
  selector: 'card-profile',
  template: `
    <aside
      class="flex flex-col items-center justify-evenly bg-slate-950 p-4 rounded-md shadow-md hover:scale-105 shadow-black hover:shadow-xl  hover:shadow-red-700 transition-all duration-300 ease-in-out h-full w-full min-w-90 max-w-[500px]"
    >
      <img
        class="h-32 w-32 xl:w-52 xl:h-52 2xl:62 2xl:h-62 rounded-full object-cover"
        src="https://rare-gallery.com/livewalls/imgpreview/142263-naruto-lofi-live-wallpaper.jpg"
        alt="perfil"
      />
      <div>
        <p class="text-gray-600">{{ '@ByterDev' }}</p>
        <p class="capitalize">Bryan Saavedra</p>
        <p class="text-gray-600">20 años</p>
        <p>🟥🟥⬜⬜🟥🟥</p>
        <p>🟥🟥⬜⬜🟥🟥</p>
        <p>🟥🟥⬜⬜🟥🟥</p>
        <p class="text-gray-600">PeruKistano</p>
        <br />
        <escribir-maquina
          [text]="'Desarrolador'"
          [textos]="textos"
          class="capitalize"
        ></escribir-maquina>
      </div>
    </aside>
  `,
  standalone: true,
  imports: [SeccionMaxComponent, EscribirMaquinaComponent],
})
export class CardProfileComponent {
  textos: string[] = [
    'desarrollador web',
    'gestor de base de datos',
    'Gamer',
    'Musico',
    'Goku God',
    'Que la fuerza te acompañe',
  ];
}
