import { Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-seccion-me',
  templateUrl: './seccion-me.component.html',
  styleUrls: ['./seccion-me.component.css','../seccion-start/seccion-start.component.css','../scroll-c/scroll-c.component.css']
})
export class SeccionMeComponent {
  @Input() DatosEntrada:any 
  
}
