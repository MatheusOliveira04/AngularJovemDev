import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent {

  public value: number = 0;
  public word: string = '';
  public letter: string = '';
  public replace: string = '';
  public seeWord: boolean = false;

  public convertDolarToReal(): number{
    return this.value / 4.85;
  }

  public convertEuroToReal(): number{
    return this.value / 5.35;
  }

  public see(){
    this.seeWord = !this.seeWord;
  }
}
