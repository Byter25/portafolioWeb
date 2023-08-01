import { Component} from '@angular/core';
import { Intereses } from "../seccion.interface";
@Component({
  selector: 'app-seccion-me',
  templateUrl: './seccion-me.component.html',
  styleUrls: ['./seccion-me.component.css', '../app.component.css']
})
export class SeccionMeComponent {
  agrandarCaja(){
    const btnAgrandar = document.getElementById('btnAgrandar') as HTMLButtonElement
    const texto = document.querySelector('.reziceCaja p') as HTMLParagraphElement
    texto.style.maxHeight ="none"
    btnAgrandar.style.display = "none"
  }
  intereses:Intereses[] =[
    {id:1,interes:'node',icon:'fa-brands fa-node-js',color:'#68A063'},
    {id:2,interes:'sql',icon:'fa-solid fa-database',color:'#FCF443'},
    {id:3,interes:'github',icon:'fa-brands fa-github',color:'#4078c0'},
    {id:4,interes:'youtube',icon:'fa-brands fa-youtube',color:'#FF0000'},
    {id:5,interes:'musica',icon:'fa-solid fa-headphones',color:'#DF01D7'},
    {id:6,interes:'juegos',icon:'fa-brands fa-xbox',color:'#52b043'},
    {id:7,interes:'windows',icon:'fa-brands fa-windows',color:'#0078D4'},
    {id:8,interes:'futbol',icon:'fa-solid fa-futbol',color:'#Efb810'}
  ]
}
