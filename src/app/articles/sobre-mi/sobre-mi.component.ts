import { Component } from '@angular/core';
import { environment } from '@envs/environment.development';
import { PaypalService } from '@services/paypal.service';
import { MetaCardComponent } from './metas/meta-card.component';
import { FloatComponent } from '@shared/components/float.component';
import { CardProfileComponent } from "./components/card-me.component";
import { IconCard } from '@core/models/icon-card.interface';
import { IconCardComponent } from "./components/icon-card.component";
import { IconLinkComponent } from "./components/icon-link.component";
import { TranslocoModule } from '@ngneat/transloco';
import { IconLink } from '@core/models/link.interface';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [MetaCardComponent, CardProfileComponent, IconCardComponent, FloatComponent, IconLinkComponent, TranslocoModule, IconLinkComponent],
  templateUrl: './sobre-mi.component.html',
  styles: ``,
})
export class SobreMiComponent {
  private clientId = environment.PAYPAL_CLIENT_ID; // O cualquier otra forma de obtener el clientId
  public donationAmount = 1;

  constructor(private paypal: PaypalService) { }

  ngOnInit() {
    this.initializePayPal();
  }

  private initializePayPal() {
    this.paypal.loadPayPalSDK(this.clientId)
      .then(() => {
        this.paypal.initializePayPalButton('paypal-button-container', this.donationAmount);
      })
      .catch(error => {
        console.error('Error loading PayPal SDK:', error);
      });
  }

  tecnologias: IconCard[] = [
    { nombre: 'Angular Framework', icon: 'fa-brands fa-angular', color: '#ff0000' },
    { nombre: 'Microsoft Sql Server', icon: 'fa-solid fa-database', color: '#FCF443' },
    { nombre: 'Dot-Net 8.0', icon: 'assets/svg/frameworks/net.svg', color: '#7d3fd2' },
    { nombre: 'Github', icon: 'fa-brands fa-github', color: '#4078c0' },
  ];

  intereses: IconCard[] = [
    { nombre: 'intereses.web', icon: 'fa-solid fa-pager', color: '#Efb810' },
    { nombre: 'intereses.bd', icon: 'fa-solid fa-database', color: '#52b043' },
    { nombre: 'intereses.apis', icon: 'fa-solid fa-server', color: '#FFFFFF' },
    { nombre: 'intereses.desktop', icon: 'fa-solid fa-desktop', color: '#DF01D7' },
  ];


  btnLinks: IconLink[] = [
    { name: 'btnLinks.certificados', link: '/certificates', icon: 'fa fa-solid fa-file-alt' },
    { name: 'btnLinks.proyectos', link: '/proyects', icon: 'fas fa-folder' },
    { name: 'btnLinks.streams', link: '/stream', icon: 'fas fa-folder' },
    { name: 'btnLinks.cv', link: '/cv-byter', icon: 'fa-sharp fa-solid fa-download' },
  ];
}
