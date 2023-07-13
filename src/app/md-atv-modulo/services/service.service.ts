import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public evento = new EventEmitter();

  public lista: Array<any> = [];

  public getLista() {
    return this.lista;
  }

  public adicionar(medicamento: any) {
    this.lista.push(medicamento);
  }

  constructor() {}
}
