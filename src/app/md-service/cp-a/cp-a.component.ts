import { Component } from '@angular/core';
import { ExemploServiceService } from '../service/exemplo-service.service';

@Component({
  selector: 'app-cp-a',
  templateUrl: './cp-a.component.html',
  styleUrls: ['./cp-a.component.scss']
})
export class CpAComponent {

  public qt: number = 0;

  //Injeção de dependências
  constructor(private service: ExemploServiceService){}

public addItem(valor: string){
  return this.service.adiciona(valor);
}

  ngOnInit(): void{
    this.service.emitEvent.subscribe({
      next: (res: number) => this.qt = res,
      error: (err: number) => this.qt = 0,
    });
  }
}
