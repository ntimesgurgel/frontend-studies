import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent {
  transferencias: any[];

  constructor(private service: TransferenciaService){}

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) =>{
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
