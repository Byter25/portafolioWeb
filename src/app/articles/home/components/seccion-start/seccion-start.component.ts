import { Component } from '@angular/core';
@Component({
    selector: 'app-seccion-start',
    templateUrl: './seccion-start.component.html',
    styleUrls: ['./seccion-start.component.css', '../../../../app.component.css'],
    standalone: true,
})
export class SeccionStartComponent {
  redirectExternalPage(link: string) {
    window.location.href = link;
  }
}
