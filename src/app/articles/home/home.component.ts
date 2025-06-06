import { IconCard } from '../../core/models/icon-card.interface';
import { Component } from '@angular/core';
import { CardProfileComponent } from '../sobre-mi/components/card-me.component';
import { IconCardComponent } from '../sobre-mi/components/icon-card.component';
import { Progreso } from '../../core/models/progreso.interface';
import { FloatComponent } from '@shared/components/float.component';
import { IconLink } from '@core/models/icon-link';
import { BtnRefComponent } from "../sobre-mi/components/btn-ref.component";
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
