import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

 horarioSelecionado: string = '00:00';
 posicaoSeg: number = 1;
 posicaoMin: number = 1;


 mudarTempo(x: number){

 }

 pegarValorTempo(x: number){
    let partesMinutos = this.horarioSelecionado.split(':');
      let partesSegundos = partesMinutos[this.posicaoMin].split('');
        partesSegundos[this.posicaoSeg] = x.toString();
        partesMinutos[this.posicaoMin] = partesSegundos.join('');
        let novaHora = partesMinutos.join(':');
        this.horarioSelecionado = novaHora;
        this.positionValue();

}

 positionValue(){
   this.posicaoSeg--;
   if(this.posicaoSeg < 0){
     this.posicaoMin--;
     this.posicaoSeg = 1;
   }
 }

 cancelar(){
  this.horarioSelecionado = '00:00';
  this.posicaoMin = 1;
  this.posicaoSeg = 1;
 }

 aumentaTempo(mais: number){
  let partesMinutos = this.horarioSelecionado.split(':');
      let partesMinutoNumber:number = parseInt(partesMinutos[0]);
      let partesSegundosNumber: number = parseInt(partesMinutos[1])
      if(mais >= 60){
        partesMinutoNumber += partesSegundosNumber % 60;
        partesSegundosNumber = partesSegundosNumber / 60;
      } else{
        partesSegundosNumber += mais;
    }
      this.horarioSelecionado = partesMinutoNumber + ":" + partesSegundosNumber;
 }

}
