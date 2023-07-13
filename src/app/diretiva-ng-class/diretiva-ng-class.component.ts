import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.scss'],
})
export class DiretivaNgClassComponent {
  public valid: boolean = false;
  public letter: string = 'GAME';
  public name: string = '';
  public img: string =
    'https://emojiguide.com/wp-content/uploads/2021/04/AdobeStock_306758511-1536x1536.jpeg';
  public imgStyle: string = 'width: 100px; height: 100px';

  ngOnInit(): void {
    setInterval(() => {
      this.valid = !this.valid;
      this.nameInsert();
    }, 1000);
  }

  nameInsert() {
    if (this.valid == true) {
      this.name = 'OVER';
      this.img =
        'https://th.bing.com/th/id/OIP.LsACBr8rho1lQpaxCzP7MwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7';
    } else {
      this.img =
        'https://emojiguide.com/wp-content/uploads/2021/04/AdobeStock_306758511-1536x1536.jpeg';
    }
  }
}
