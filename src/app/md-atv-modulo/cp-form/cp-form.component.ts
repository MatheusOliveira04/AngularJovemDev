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

  public enviar(medicamento: any){
    this.service.adicionar(medicamento);
  }

  ngOnInit(){
    this.service.evento.subscribe({
      next: (res: any) => this.medicamento = res,
      error:(erro: any) => this.medicamento = {nome: '', valor: 0}
    })
  }
}
