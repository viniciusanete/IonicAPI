import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Agendamento } from '../../modelos/agendamento';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(public _storage: Storage) {
    
  }

  private _geraChave(agendamento : Agendamento){
    return agendamento.emailCliente + agendamento.data.substr(0,10);
  }
  salva(agendamento: Agendamento){
    let chave = this._geraChave(agendamento);
    let promise = this._storage.set(chave, agendamento);

    return Observable.fromPromise(promise);
  }
}
