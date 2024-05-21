import { Component } from '@angular/core';
import { Skills } from 'src/app/core/models/seccion.interface';
import { BorderIconComponent } from 'src/app/shared/components/border-icon.component';
import { ProgressBarComponent } from 'src/app/shared/components/process-bar.component';
import { SeccionMaxComponent } from 'src/app/shared/components/seccion-max.component';
@Component({
    selector: 'app-seccion-start',
    templateUrl: './seccion-start.component.html',
    styles:``,
    imports:[SeccionMaxComponent, BorderIconComponent,ProgressBarComponent],
    standalone: true,
})
export class SeccionStartComponent {
  tecnicas: Skills[] = [
    { id: 1, skill: 'html-css', progreso: 82 },
    { id: 2, skill: 'javascript', progreso: 70 },
    { id: 3, skill: 'python', progreso: 76 },
    { id: 4, skill: 'java', progreso: 63 },
    { id: 5, skill: 'sql', progreso: 72 },
  ];

  profesional: Skills[] = [
    { id: 1, skill: 'trabajo en equipo', progreso: 83 },
    { id: 2, skill: 'adaptabilidad', progreso: 91 },
    { id: 3, skill: 'pensamiento analitico', progreso: 89 },
    { id: 4, skill: 'empatia', progreso: 90 },
    { id: 5, skill: 'a', progreso: 60 },
  ];
}
