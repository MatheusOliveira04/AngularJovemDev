import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss'],
})
export class MicroondasComponent {
  public minutos: number = 0;
  public segundos: number = 0;
  public numeroTempo: string = '';
  public mostrarTempo: string = '';
  public quantidade: number = 0;
  public estaLigado = false;
  public intervalo: any;
  public numeros: Array<string> = [
    '0','1','2','3','4','5','6','7','8','9',
  ];

  public pegarNumero(index: number) {
    if (this.quantidadeDigitos()) {
      this.numeroTempo += this.numeros[index];
      this.mostrarTempo = this.numeroTempo.padStart(4, '0');
      this.minutos = parseInt(this.mostrarTempo.substring(0, 2));
      this.segundos = parseInt(this.mostrarTempo.substring(2, 4));
      this.validaRelogio();
      this.mostrar();
    }
  }

  public quantidadeDigitos(): boolean {
    if (this.quantidade < 4) {
      this.quantidade++;
      return true;
    } else {
      return false;
    }
  }

  public validaRelogio() {
    if (this.segundos > 59) {
      this.minutos += Math.floor(this.segundos / 60);
      this.segundos = this.segundos % 60;
      this.numeroTempo = `${this.minutos} ${this.segundos}`;
    }
  }

  public mostrar() {
    let minutosTempo = this.minutos.toString().padStart(2, '0');
    let segundosTempo = this.segundos.toString().padStart(2, '0');
    this.mostrarTempo = `${minutosTempo} : ${segundosTempo}`;
  }

  public aumentar(valor: number) {
    this.segundos += valor;
    this.validaRelogio();
    this.mostrar();
    this.quantidade = 4;
  }

  public cancelar() {
    this.minutos = 0;
    this.segundos = 0;
    this.numeroTempo = '';
    this.mostrarTempo = '';
    this.quantidade = 0;
    this.parar();
  }

  comecar() {
    this.estaLigado = true;
    this.intervalo = setInterval(() => {
      if (this.minutos <= 0 && this.segundos <= 0) {
        this.cancelar();
      }
      this.segundos--;
      if (this.segundos <= 0) {
        if (this.minutos <= 0 && this.segundos <= 0) {
          this.cancelar();
        } else {
          this.segundos = 59;
          this.minutos--;
        }
      }
      this.mostrar();
    }, 1000);
  }

  parar() {
    clearInterval(this.intervalo);
    this.estaLigado = false;
  }
}
