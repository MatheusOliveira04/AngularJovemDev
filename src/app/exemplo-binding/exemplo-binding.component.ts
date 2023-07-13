import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss'],
})
export class ExemploBindingComponent {
  numero: number = 0;
  img: string = '';

  aumenta() {
    this.numero += 5;
  }

  diminui() {
    this.numero -= 5;
  }

  maximo(): boolean {
    if (this.numero >= 50) {
      this.img =
        'https://th.bing.com/th/id/OIP.1btbaOr3W-bRwLq8KjTaJwHaHa?pid=ImgDet&rs=1';
      return true;
    }
    this.img =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr0UKM4Ten8jaftzQ_bH40VwkV7tvVcxeuZAXNcM&s';
    return false;
  }
  minimo(): boolean {
    if (this.numero <= 0) {
      this.img =
        'https://th.bing.com/th/id/OIP.1btbaOr3W-bRwLq8KjTaJwHaHa?pid=ImgDet&rs=1';
      return true;
      this.img =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr0UKM4Ten8jaftzQ_bH40VwkV7tvVcxeuZAXNcM&s';
    }
    return false;
  }
}
