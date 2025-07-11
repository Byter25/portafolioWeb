import { Component } from '@angular/core';
import { environment } from '@envs/environment.development';
import { PaypalService } from '@services/paypal.service';
import { MetaCardComponent } from './meta-card.component';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [MetaCardComponent],
  templateUrl: './metas.component.html',
  styles: ``
})
export class MetasComponent {
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
}
