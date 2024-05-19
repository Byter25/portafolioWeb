import { Component } from '@angular/core';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';

@Component({
    selector: 'app-seccion-contacto',
    templateUrl: './seccion-contacto.component.html',
    imports:[SeccionMaxComponent],
    styleUrls: ['./seccion-contacto.component.css', '../../../../app.component.css'],
    standalone: true
})
export class SeccionContactoComponent {

}
