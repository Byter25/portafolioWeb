import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '@envs/environment.development';
import { PaypalService } from '@services/paypal.service';
import { DonacionesComponent } from './donaciones.component';
import { FloatComponent } from '@shared/components/float.component';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [DonacionesComponent],
  templateUrl: './sobre-mi.component.html',
  styles: ``,
})
export class SobreMiComponent {
  private clientId = environment.PAYPAL_CLIENT_ID; // O cualquier otra forma de obtener el clientId
  public donationAmount = 1;

  constructor(private paypal: PaypalService) {}

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
}
