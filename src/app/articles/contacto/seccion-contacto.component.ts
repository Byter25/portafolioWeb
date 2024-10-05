import { Component } from '@angular/core';

@Component({
  selector: 'page-contacto',
  templateUrl: './seccion-contacto.component.html',
  imports: [],
  styles: `
  input,textarea{
    @apply bg-zinc-200 dark:bg-zinc-800 py-2 px-4 rounded-md
  }
    `,
  standalone: true,
})
export class ContactoComponent {}
