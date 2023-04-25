import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarNovaTransferencia(transferencia: any): Observable<Transferencia>{
    this.adicionarData(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private adicionarData(transferencia: any){
      transferencia.data = new Date();
  }

}
