import { Component, OnInit } from '@angular/core';
import { ContratoService } from './shared/services/contrato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contratos = [];

  contrato = {};

  openModal: boolean = false;

  constructor(private contratoService: ContratoService) {}

  ngOnInit() {
    this.consultarContratos();
  }

  consultarContratos() {
    this.contratoService.listar()
      .then(dados => this.contratos = dados);
  }

  exibir(id: number) {
    this.contratoService.listarPorId(id)
      .then(dados => {
        this.openModal = true;
        this.contrato = dados
      });
  }

  onCloseModal() {
    this.openModal = false;
  }

}
