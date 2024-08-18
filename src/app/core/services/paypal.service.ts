import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  private scriptLoaded = false;
  private scriptElement: HTMLScriptElement | null = null;

  constructor() {}

  loadPayPalSDK(clientId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.scriptLoaded) {
        resolve();
        return;
      }

      if (!clientId) {
        reject('PayPal Client ID is not provided.');
        return;
      }

      this.scriptElement = document.createElement('script');
      this.scriptElement.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
      this.scriptElement.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };
      this.scriptElement.onerror = (error) => {
        reject('Failed to load PayPal SDK.');
      };
      document.body.appendChild(this.scriptElement);
    });
  }

  // Método para inicializar el botón de PayPal para donaciones
  initializePayPalButton(containerId: string, donationAmount: number): void {
    if (!this.scriptLoaded) {
      console.error('PayPal SDK is not loaded.');
      return;
    }

    // Inicializa el botón de PayPal
    (window as any).paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: donationAmount.toString() // Monto de la donación
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log('Donation completed by', details.payer.name.given_name);
          // Aquí puedes manejar la donación completada (actualizar la meta, etc.)
        });
      }
    }).render(`#${containerId}`);
  }
}
