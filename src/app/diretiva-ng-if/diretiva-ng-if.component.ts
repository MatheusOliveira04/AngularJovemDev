import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss']
})
export class DiretivaNgIfComponent {
  public numeroAleatorio: number = 0;
  public escolhido: number = 0;
  public valida: boolean = false;
  public resultado: string = '';

  validaNumero(): boolean {
    if (this.escolhido >= 1 && this.escolhido <= 10) {
      return true;
    } else {
      return false;
    }
  }

  gerarNumeroAleatorio() {
    this.numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    this.valida = this.verificaNumero();
  
  }
  
  verificaNumero(): boolean {
    this.valida = this.validaNumero();
    if (this.valida == true) {
      if (this.escolhido === this.numeroAleatorio) {
        this.resultado = 'Você acertou!!';
        return true;
      } else {
        this.resultado = 'Você errou.';
        return false;
      }
    } else {
      this.resultado = 'Número inválido';
      return false;
    }
  }
}