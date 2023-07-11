import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public evento = new EventEmitter();

  public medicamento= {
    nome: '',
    valor: 0
  };

  public lista: Array<any> = [];

public getLista(){
  return this.lista;
}

public adicionar(medicamento: any){
  this.lista.push(medicamento);
  this.evento.emit(this.lista)
};

  constructor() { }
}
