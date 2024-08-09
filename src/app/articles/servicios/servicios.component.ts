import { Component } from '@angular/core';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';
import { ProgressBarComponent } from 'src/app/articles/home/process-bar.component';

@Component({
  selector: 'page-servicios',
  templateUrl: './servicios.component.html',
  standalone: true,
  imports: [SeccionMaxComponent, ProgressBarComponent],
})
export class ServiciosComponent {

}
