import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss'],
})
export class DiretivaNgForComponent {
  public numero: number = 0;
  public aviso: string = '';
  public lista: any = [
  ];

  public addValor() {
    if (this.numero <= 10) {
      this.lista.push({numero: this.numero});
      this.numero++;
      this.aviso = '';
    } else {
      this.aviso = 'Número máximo atingido';
    }
  }

  public tiraValor() {
    if (this.numero > 0) {
      this.lista.pop();
      this.numero--;
      this.aviso = '';
    } else {
      this.aviso = 'Não há o que retirar';
    }
  }
}
