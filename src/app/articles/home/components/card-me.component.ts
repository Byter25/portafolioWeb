import { Component } from '@angular/core';
import { FloatComponent } from '@shared/components/float.component';
import { EscribirMaquinaComponent } from '@shared/components/escribirMaquina.component';

@Component({
  selector: 'card-profile',
  template: `
    <float class="">
      <img
        class="aspect-square rounded-full object-cover w-[150px] border-4 border-gray-800"
        src="assets/perfil.webp"
        alt="perfil"
      />
      <div class="flex flex-col justify-center items-center">
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
          class="capitalize text-center"
        ></escribir-maquina>
      </div>
    </float>
  `,
  styles: ``,
  standalone: true,
  imports: [EscribirMaquinaComponent, FloatComponent],
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

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
