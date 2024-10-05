import { Component } from '@angular/core';
import { EscribirMaquinaComponent } from './escribirMaquina.component';
import { MenuTopComponent } from './navbar/menu-top.component';
@Component({
  selector: 'float',
  standalone: true,
  imports: [EscribirMaquinaComponent, MenuTopComponent],
  template: `
    <aside class="relative p-3 flex flex-col items-center justify-around rounded-md  hover:scale-105 transition-all duration-300 ease-in-out h-full w-full overflow-hidden shadow-md dark:shadow-black hover:shadow-red-600">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <ng-content> </ng-content>
    </aside>
  `,
  styles: `
  aside div:nth-child(1){
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width:100%;
    height:3px;
    background: linear-gradient(to right, transparent, red);
    animation: left-right 2s linear infinite;
  }
  aside div:nth-child(2){
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    width:3px;
    height:100%;
    background: linear-gradient(to bottom, transparent, red);
    animation: top-bottom 2s linear infinite;
    animation-delay: 1s;
  }
  aside div:nth-child(3){
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width:100%;
    height:3px;
    background: linear-gradient(to left, transparent, red);
    animation: right-left 2s linear infinite;
  }
  aside div:nth-child(4){
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 3px;
    height:100%;
    background: linear-gradient(to top, transparent, red);
    animation: bottom-top 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes left-right {
    0%{ transform: translateX(-100%);
    }
    100%{
      transform: translateX(100%);
    }
  }
  @keyframes right-left {
    0%{ transform: translateX(100%);
    }
    100%{
      transform: translateX(-100%);
    }
  }
  @keyframes top-bottom {
    0%{ transform: translateY(-100%);
    }
    100%{
      transform: translateY(100%);
    }
  }
  @keyframes bottom-top {
    0%{ transform: translateY(100%);
    }
    100%{
      transform: translateY(-100%);
    }
  }
  `,
})
export class FloatComponent { }
