import { Component , Input} from '@angular/core';
@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  @Input() DatosEntrada:any 
  
}
