import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``,
  standalone: true,
  imports: [MatIcon,TranslocoModule],
  providers: [TranslocoService],
})
export class HomeComponent {

}
