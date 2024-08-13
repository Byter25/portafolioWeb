import { Component, Input } from '@angular/core';
import { EscribirMaquinaComponent } from './escribirMaquina.component';
import { MenuTopComponent } from './navbar/menu-top.component';
@Component({
  selector: 'seccion-max',
  standalone: true,
  imports: [EscribirMaquinaComponent, MenuTopComponent],
  template: `
    <section
    >
      <ng-content> </ng-content>
    </section>
  `,
})
export class SeccionMaxComponent {
  @Input() id: string = '';
  @Input() fondo: string = '';
}
