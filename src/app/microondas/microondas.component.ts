import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {
  horarioSelecionado: string = '00:00';
  posicao: number = 5;
  repeticoes = -1;
  quantidadeNumeroMaxima = 0;
  lista: string[] = [ 
    this.horarioSelecionado.charAt(0),
   this.horarioSelecionado.charAt(1),
    this.horarioSelecionado.charAt(3),
   this.horarioSelecionado.charAt(4)];
  

  pegarValorTempo(x: number) {
    if(this.quantidadeNumeroMaximaOcupar()){
      this.posicao--;
      this.repeticoes++;
      if (this.repeticoes === 1) {
        this.lista[this.posicao] = this.lista[this.posicao + 1];
        if(this.posicao <= 2){
          this.lista[this.posicao + 1] = this.lista[this.posicao + 2]
          if(this.posicao === 1){
            this.lista[this.posicao + 2] = this.lista[this.posicao + 3 ]
          }
        }
        this.lista[4] = x.toString();
        this.repeticoes--;
        this.quantidadeNumeroMaxima++;
      } else {
        this.lista[4] = x.toString();
        this.quantidadeNumeroMaxima++;
      }
    }
    this.mostrar();
  }

  quantidadeNumeroMaximaOcupar(): boolean {
    if(this.quantidadeNumeroMaxima != 4){
      return true;
    } else {
      return false;
    }
  }

  mostrar(){
    this.horarioSelecionado = this.lista[1] + this.lista[2] + ':' + this.lista[3] + this.lista[4];
  }

  

  cancelar() {
    this.horarioSelecionado = '00:00';
    this.posicao = 5;
    this.repeticoes = -1;
    this.quantidadeNumeroMaxima = 0;
    for (let index = 0; index < this.lista.length; index++) {
    this.lista[index] = '0';   
    }
  }

  aumentaTempo(mais: number) {
    let partesMinutos = this.horarioSelecionado.split(':');
    let partesMinutoNumber: number = parseInt(partesMinutos[0]);
    let partesSegundosNumber: number = parseInt(partesMinutos[1]);
    if (mais >= 60) {
      partesMinutoNumber += partesSegundosNumber % 60;
      partesSegundosNumber = partesSegundosNumber / 60;
    } else {
      partesSegundosNumber += mais;
    }
    this.horarioSelecionado = partesMinutoNumber + ':' + partesSegundosNumber;
  }
}