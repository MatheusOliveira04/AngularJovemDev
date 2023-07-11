import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-switch',
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrls: ['./diretiva-ng-switch.component.scss']
})
export class DiretivaNgSwitchComponent {
  public num: number = 0;
  public img: string = '';


  florImg(){
    this.num = 1;
    this.img = 'https://media.istockphoto.com/id/846747752/pt/foto/light-pink-flower-of-eustoma-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=nt4-OUepKLOP-Po-TbtMe7483tbZ2HmSQJvVryuQNtM=';
  }

  carroImg(){
    this.num = 2;
    this.img = 'https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=715&,format=auto/uploads/2023/05/Fiat-Mobi-715x402.jpg';
  }
  
    casaImg(){
      this.num = 3;
      this.img = 'https://static8.depositphotos.com/1472772/979/i/450/depositphotos_9790848-stock-photo-house-icon-3d-illustration.jpg';
    }

    pessoaImg(){
      this.num = 4;
      this.img = 'https://cdn.awsli.com.br/299/299243/arquivos/l-intro-1628786061.jpg';
    }
}
