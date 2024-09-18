import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { YtStreamComponent } from './components/yt-stream.component';
@Component({
  selector: 'transmiciones',
  imports:[RouterLink, RouterOutlet, YtStreamComponent],
  templateUrl:'stream.component.html',
  styles:``,
  standalone: true,
})
export class StreamComponent {

}
