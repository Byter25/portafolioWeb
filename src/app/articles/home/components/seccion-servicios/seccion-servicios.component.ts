import { Component } from '@angular/core';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';
import { ProgressBarComponent } from 'src/app/shared/components/process-bar.component';

@Component({
  selector: 'app-seccion-servicios',
  templateUrl: './seccion-servicios.component.html',
  styleUrls: [
    '../../../../app.component.css',
  ],
  standalone: true,
  imports: [SeccionMaxComponent, ProgressBarComponent],
})
export class SeccionServiciosComponent {

}
