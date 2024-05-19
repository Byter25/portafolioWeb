import { Component } from '@angular/core';
import { BorderIconComponent } from 'src/app/shared/components/border-icon.component';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';
@Component({
    selector: 'app-seccion-start',
    templateUrl: './seccion-start.component.html',
    styles:``,
    imports:[SeccionMaxComponent, BorderIconComponent],
    standalone: true,
})
export class SeccionStartComponent {
}
