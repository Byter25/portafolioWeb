import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sobre-mi.component.html',
  styles:`.imagen{
    background: url('../../../assets/DBZ4.webp');
    @apply bg-cover bg-center
  }`,
})
export class SobreMiComponent {

}
