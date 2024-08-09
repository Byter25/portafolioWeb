import { Component, Input } from '@angular/core';
import { EscribirMaquinaComponent } from './escribirMaquina.component';
import { MenuTopComponent } from './navbar/menu-top.component';
@Component({
  selector: 'seccion-max',
  standalone: true,
  imports: [EscribirMaquinaComponent, MenuTopComponent],
  template: `
    <section
      class="font-sans flex items-center justify-center text-center overflow-hidden h-screen max-w-full bg-cover transition duration-500"
      [id]="id"
      [style.background-image]="'url('+fondo+')'"
    >
      <ng-content> </ng-content>
    </section>
  `,
})
export class SeccionMaxComponent {
  @Input() id: string = '';
  @Input() fondo: string = '';
}
