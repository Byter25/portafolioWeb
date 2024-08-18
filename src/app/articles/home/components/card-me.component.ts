import { Component } from '@angular/core';
import { FloatComponent } from '@shared/components/float.component';
import { EscribirMaquinaComponent } from 'src/app/shared/components/escribirMaquina.component';
@Component({
  selector: 'card-profile',
  template: `
    <float
    >
      <img
        class="aspect-square rounded-full object-cover h-32 md:h-40"
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
    </float>
  `,
  standalone: true,
  imports: [EscribirMaquinaComponent ,FloatComponent],
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
