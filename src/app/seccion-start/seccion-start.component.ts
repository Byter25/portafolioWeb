import { Component , Input,ViewChild} from '@angular/core';
@Component({
  selector: 'app-seccion-start',
  templateUrl: './seccion-start.component.html',
  styleUrls: ['./seccion-start.component.css']
})
export class SeccionStartComponent {
  @Input() DatosEntrada:any 
  
}
