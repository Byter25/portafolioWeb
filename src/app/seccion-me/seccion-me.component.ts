import { Component} from '@angular/core';
import { Intereses } from "../seccion.interface";
@Component({
  selector: 'app-seccion-me',
  templateUrl: './seccion-me.component.html',
  styleUrls: ['./seccion-me.component.css','../scroll-c/scroll-c.component.css']
})
export class SeccionMeComponent {
  intereses:Intereses[] =[
    {id:1,interes:"node",icon:"fa-brands fa-node-js"},
    {id:2,interes:"database",icon:"fa-solid fa-database"},
    {id:3,interes:"github",icon:"fa-brands fa-github"},
    {id:4,interes:"youtube",icon:"fa-brands fa-youtube"},
    {id:5,interes:"musica",icon:"fa-solid fa-headphones"},
    {id:6,interes:"juegos",icon:"fa-solid fa-gamepad"},
    {id:7,interes:"windows",icon:"fa-brands fa-windows"},
    {id:8,interes:"futbol",icon:"fa-solid fa-futbol"}
  ]
}
