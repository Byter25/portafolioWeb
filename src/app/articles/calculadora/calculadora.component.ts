import { Component } from '@angular/core';

@Component({
    selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.css'],
    standalone: true
})
export class CalculadoraComponent {
  resG:string= ''
  visor: string = ''
  result:string = ''

  escribeOp(c:string){
    let cadena = this.visor + c
    if(cadena.charAt(cadena.length - 2) == 'x' && cadena.charAt(cadena.length - 1) == 'x'){
      this.visor += c
      this.retroceder()
    }else{
      this.visor += c
    }
  }

  escribeRes(){
    let resultado:number = this.resolver(this.visor)
    this.result = String(resultado)
 }

  resolver(op: string): number {
    // Separa los números y operadores de la operación
    let signos: string[] = op.match(/[+\-x/]/g) || []
    let cadena:string[] = (op.split(/[+\-x/]/))
    let numers = cadena.map(Number)
    // Realiza la evaluación de la operación respetando el orden de operaciones
    this.resOp(numers, signos, "x", "/")
    this.resOp(numers, signos, "+", "-")

    return numers[0]
  }

  resOp(numeros: number[], operadores: string[], op1: string, op2: string): void {
    for (let i = operadores.length - 1; i >= 0; i--) {
      let operador = operadores[i]
      if (operador === op1 || operador === op2) {
        let num1 = numeros[i]
        let num2 = numeros[i + 1]
        let resultado: number = 0
        switch (operador) {
          case "x":
            resultado = num1 * num2;
            break;
          case "/":
            resultado = num1 / num2;
            break;
          case "+":
            resultado = num1 + num2;
            break;
          case "-":
            resultado = num1 - num2;
            break;
        }
        numeros.splice(i, 2, resultado);
        operadores.splice(i, 1);
      }
    }
  }

  borrar(){
    this.resG = this.result
    this.visor = ''
    this.result = ''
  }
  
  retroceder(){
    this.visor = this.visor.slice(0, -1)
  }
}

