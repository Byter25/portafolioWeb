import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class YtapiService {
  private apiKey = 'AIzaSyDkPDEQJrGpea0axkX1vKx837i9Zb_g_-k'; // Reemplaza con tu API Key
  private channelId = 'UCNMf_xtfsAFFcp5kKFw-uSA'; // Reemplaza con el ID del canal de YouTub

  // Signal para almacenar el estado de la transmisión en vivo
  liveStreamId = signal<string | null>(null);
  isStreamActive = signal(false);
  errorMessage = signal<string | null>(null);

  // Convertimos el observable en un signal
  // Convertimos el observable en un signal
  private streamDataSignal = toSignal(
    this.http.get<any>(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.channelId}&eventType=live&type=video&key=${this.apiKey}`
    ),
    { initialValue: null }
  );

  constructor(private http: HttpClient) {}

  // Método para verificar el estado del stream
  // Método para verificar el estado del stream
  checkLiveStream(): void {
    const response = this.streamDataSignal();

    if (response && response.items && response.items.length > 0) {
      const newLiveStreamId = response.items[0].id.videoId;

      if (this.liveStreamId() !== newLiveStreamId) {
        // Actualiza el ID de la transmisión en vivo solo si ha cambiado
        this.liveStreamId.set(newLiveStreamId);
        this.isStreamActive.set(true);
        this.errorMessage.set(null);
      }
    } else {
      this.isStreamActive.set(false);
      this.liveStreamId.set(null);
      this.errorMessage.set('No hay ninguna transmisión en vivo en este momento.');
    }
  }
}
