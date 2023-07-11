import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-model',
  templateUrl: './diretiva-ng-model.component.html',
  styleUrls: ['./diretiva-ng-model.component.scss'],
})
export class DiretivaNgModelComponent {
  public valorVertical: number = 0;
  public valorVerticalStr: string = this.valorVertical + 'px';
  public valorHorizontal: number = 0;
  public valorHorizontalStr: string = this.valorHorizontal + 'px';

  abaixo() {
    this.valorVertical += 50;
    this.valorVerticalStr = this.valorVertical + 'px';
    if (this.valorVertical > 550) {
      this.valorVertical = -50;
    }
  }

  acima() {
    if (this.valorVertical === 0) {
      this.valorVertical = 550;
    } else {
      this.valorVertical -= 50;
      this.valorVerticalStr = this.valorVertical + 'px';
    }
  }
  esquerda() {
    if (this.valorHorizontal === 0) {
      this.valorHorizontal = -600;
    } else {
      this.valorHorizontal += 50;
      this.valorHorizontalStr = this.valorHorizontal + 'px';
    }
  }

  direita() {
    this.valorHorizontal -= 50;
    this.valorHorizontalStr = this.valorHorizontal + 'px';
    if (this.valorHorizontal <= -600) {
      this.valorHorizontal = 0;
    }
  }
}
