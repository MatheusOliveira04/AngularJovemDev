import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss'],
})
export class DiretivaNgForComponent {
  public numero: number = 1;
  public aviso: string = '';
  public mostrar: boolean = false;
  public imagem: string =
    'https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg';
  public lista: any = [];

  public mostrarLista() {
    this.mostrar = !this.mostrar;
  }

  public addValor() {
    if(this.numero === 0){
      this.numero = 1;
    }  else if (this.numero <= 10) {
      this.lista.push({ numero: this.numero });
      this.numero++;
      this.aviso = '';
    }  else {
    this.aviso = 'Número máximo atingido';
    }
  }

  public tiraValor() {
    if (this.numero >= 1) {
      this.lista.pop();
      this.numero--;
      this.aviso = '';
    } else {
      this.aviso = 'Não há o que retirar';
    }
  }
}