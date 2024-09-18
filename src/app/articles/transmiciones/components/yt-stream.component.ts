import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { YtapiService } from '@services/ytapi.service';

@Component({
  selector: 'yt-stream',
  imports: [RouterLink, RouterOutlet],
  template: `
    @if(isStreamActive()){
    <div class="bg-red-600">
      <iframe
        width="100px"
        height="500"
        [src]="'https://www.youtube.com/embed/' + liveStreamId()"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
    }
    <div class="bg-red-600"></div>
    `,
  styles: ``,
  standalone: true,
})
export class YtStreamComponent implements OnInit {
  constructor(private youtubeService:YtapiService){}

  // Signals accesibles en el componente
  liveStreamId = this.youtubeService.liveStreamId;
  isStreamActive = this.youtubeService.isStreamActive;
  errorMessage = this.youtubeService.errorMessage;
  ngOnInit(): void {
    // Verifica el estado del stream al iniciar el componente
    this.youtubeService.checkLiveStream();
  }
}
