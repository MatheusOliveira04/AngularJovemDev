import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {
  public medicamento= {
    nome: '',
    valor: 0
  };

  //Injeção de dependências
  constructor(private service: ServiceService){}

  public enviar(valor: any){
    let obj = {
      nome: valor.nome,
      valor: valor.valor
    }
    console.log(this.medicamento.nome);
    console.log(this.medicamento.valor);

    this.service.adicionar(obj);
  }
}