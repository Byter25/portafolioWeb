import { Component } from '@angular/core';
import { Certificados } from '../seccion.interface';
@Component({
  selector: 'app-seccion-certificados',
  templateUrl: './seccion-certificados.component.html',
  styleUrls: ['./seccion-certificados.component.css', '../app.component.css']
})
export class SeccionCertificadosComponent {

  certificados: Certificados[] = [
    {id:0,titulo:'certificado',descripcion:'hola que tal descripcion',url:'../../assets/certificados/2clmsCertificate_pages-to-jpg-0001.jpg'},
    {id:1,titulo:'certificado',descripcion:'hola que tal descripcion',url:'../../assets/certificados/Certificate of Attendance (RH124-8.2) (1)_page-0001.jpg'},
    {id:2,titulo:'certificado',descripcion:'hola que tal descripcion',url:'../../assets/certificados/clmsCertificate_pages-to-jpg-0001.jpg'},
    {id:3,titulo:'certificado',descripcion:'hola que tal descripcion',url:'../../assets/certificados/course_certificate_DB_page-0001.jpg'},
    {id:4,titulo:'certificado',descripcion:'hola que tal descripcion',url:'../../assets/certificados/course_certificate_JAVA_page-0001.jpg'},
    {id:5,titulo:'certificado',descripcion:'hola que tal descripcion',url:'../../assets/certificados/2clmsCertificate_pages-to-jpg-0001.jpg'},
  ]
}
