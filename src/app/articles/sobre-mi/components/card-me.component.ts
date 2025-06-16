import { Component } from '@angular/core';
import { FloatComponent } from '@shared/components/float.component';
import { EscribirMaquinaComponent } from '@shared/components/escribirMaquina.component';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'card-profile',
  template: `
    <float class="">
      <p class="capitalize tracking-wider">Bryan Saavedra</p>
      <div class="aspect-square rounded-full w-[150px] md:w-[200px] border border-zinc-500 overflow-hidden">
        <img
          class="object-cover object-top hover:scale-110 transition-all duration-300"
          src="perfil.webp"
          alt="perfil"
        />
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-zinc-400">{{ '@ByterDev' }}</p>
        <escribir-maquina
          [textos]="textosTraducidos"
          class="capitalize text-center"
        ></escribir-maquina>
        <p>🟥🟥⬜⬜🟥🟥</p>
        <p>🟥🟥⬜⬜🟥🟥</p>
        <p>🟥🟥⬜⬜🟥🟥</p>
        <p class="text-zinc-400">PeruKistano</p>
        <p class="text-zinc-400">
          {{ calcularEdad('2003-09-11') + ' ' + ('edad' | transloco) }}
        </p>
      </div>
    </float>
  `,
  styles: ``,
  standalone: true,
  imports: [EscribirMaquinaComponent, FloatComponent, TranslocoModule],
})
export class CardProfileComponent {
  textosClaves: string[] = [
    'textos.programador',
    'textos.analista',
    'textos.streamer',
    'textos.gamer',
    'textos.fuerza',
  ];
  textosTraducidos: string[] = [];
  constructor(private translocoService: TranslocoService) { }

  ngOnInit() {
    this.traducirTextos();
    // Opcional: actualizar al cambiar idioma
    this.translocoService.langChanges$.subscribe(() => {
      this.traducirTextos();
    });
  }

traducirTextos() {
  this.textosTraducidos = [];

  this.textosClaves.forEach(clave => {
    this.translocoService.selectTranslate(clave).subscribe(traduccion => {
      this.textosTraducidos.push(traduccion);
    });
  });
}

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  calcularEdad(fechaNacimiento: string | Date): number {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--; // aún no ha cumplido años este año
    }

    return edad;
  }
}
