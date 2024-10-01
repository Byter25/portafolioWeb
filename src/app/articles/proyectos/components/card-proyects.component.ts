import { Component, Input } from '@angular/core';
import { Proyect} from '../proyect.interface';

@Component({
    selector: 'car-proyect',
    template: `
    <div class="bg-black">
      <h3>{{dataP.name}}</h3>
      <img [src]="dataP.img">
      <p>{{dataP.descripcion}}</p>
    </div>`,
    styles:``,
    imports:[],
    standalone: true
})
export class CardProyectComponent {
  @Input() dataP!:Proyect;


}

