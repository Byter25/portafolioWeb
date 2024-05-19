import { Component } from '@angular/core';
import { EscribirMaquinaComponent } from './escribirMaquina.component';
import { MenuTopComponent } from './menu-top.component';
@Component({
  selector: 'main-max',
  standalone: true,
  imports: [EscribirMaquinaComponent, MenuTopComponent],
  template: `
  <main class="relative h-screen overflow-auto scroll-snap-y-mandatory scroll-behavior-smooth min-w-96">
    <ng-content>
    </ng-content>
  </main>

  `,
})
export class MainMaxComponent {

}
