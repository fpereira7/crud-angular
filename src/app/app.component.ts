import { Component, OnInit } from '@angular/core';
import { ContratoService } from './contrato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  contratos = [];

  constructor(private contratoService: ContratoService) {}
  
  ngOnInit() {
    this.consultarContratos();
  }

  consultarContratos() {
    this.contratoService.consultarContratos()
    .then(dados => {
      this.contratos = dados;
    }) 
  }

}
