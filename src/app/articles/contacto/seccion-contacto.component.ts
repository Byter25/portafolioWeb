import { Component } from '@angular/core';

@Component({
  selector: 'page-contacto',
  templateUrl: './seccion-contacto.component.html',
  imports: [],
  styles: `
  iframe{
    @apply col-start-4 col-span-2 row-start-2 row-span-3 w-full h-full hidden md:block;
  }
  span{
    @apply col-start-1  text-right;
  }
  p{
    @apply row-start-1 col-start-4 col-span-2 text-center hidden md:block;
  }
  input,textarea{
    @apply col-start-3 md:col-start-2 col-span-3 md:col-span-2;
  }
  button{
    @apply col-start-3 col-span-5  bg-black py-1 px-2 rounded-md hover:bg-red-700 max-w-40;
  }
    `,
  standalone: true,
})
export class ContactoComponent {}
