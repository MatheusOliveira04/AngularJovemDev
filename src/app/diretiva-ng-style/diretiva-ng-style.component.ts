import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss'],
})
export class DiretivaNgStyleComponent {
  public list: Array<string> = [
    'red',
    'green',
    'yellow',
    'blue',
    'purple',
    'orange',
  ];

  public corSelecionada: string = '';

  selecionaCor(cor: string) {
    this.corSelecionada = cor;
  }
}
