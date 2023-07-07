import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-comp',
  templateUrl: './novo-comp.component.html',
  styleUrls: ['./novo-comp.component.scss']
})
export class NovoCompComponent {

  name: string = '';
  weight: number = 0;
  height: number = 0;
  sexo: string = '';
  msg: string = '';
  imc: number = 0;
  data: string = '';
  emoji: string = '';

  mostraIMC() {
    this.calculaIMC();
    this.avaliaIMC();
    this.emojiIMC();
    if (this.name === '' || this.weight <= 0 || this.height <= 0 || this.sexo == '') {
      this.msg = `Dados inválidos, preencha todos os campos`
    } else {
      this.msg = `Nome: ${this.name} \nPeso: ${this.weight} \nAltura: ${this.height} \nSexo: ${this.sexo} \nIMC: ${this.imc} \nAvaliação: ${this.data}`
    }
  }

  emojiIMC() {
    if (this.data == 'Abaixo do peso' || this.data == 'acima do peso') {
      this.emoji = `https://w7.pngwing.com/pngs/399/538/png-transparent-smiley-face-sadness-crying-smiley-faces-face-smiley-emoticon.png`;
    } else {
      this.emoji = `https://w7.pngwing.com/pngs/742/344/png-transparent-smiley-red-happiness-circle-grinning-smiley-smiley-emoticon-circle.png`;
    }
  }

  calculaIMC() {
    this.imc = this.weight / (this.height * this.height);
  }

  avaliaIMC() {
    if (this.sexo == 'masculino') {
      if (this.imc < 20.7) {
        this.data = `Abaixo do peso`;
      }
      else if (this.imc >= 20.7 && this.imc < 26.4) {
        this.data = `Peso normal`;
      }
      else if (this.imc >= 26.4 && this.imc < 27.8) {
        this.data = `Marginalmente acima do peso`;
      }
      else if (this.imc >= 27.8 && this.imc < 31.1) {
        this.data = `Acima do peso ideal`;
      }
      else {
        this.data = `acima do peso`;
      }
    } else {
      if (this.imc < 19.1) {
        this.data = `Abaixo do peso`
      }
      else if (this.imc >= 19.1 && this.imc < 25.8) {
        this.data = `Peso normal`
      }
      else if (this.imc >= 25.8 && this.imc < 27.30) {
        this.data = `Marginalmente acima do peso`
      }
      else if (this.imc >= 27.3 && this.imc < 32.3) {
        this.data = `Acima do peso ideal`
      }
      else {
        this.data = `acima do peso`
      }
    }
  }


}
