import {  Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContratoService {

  constructor(private http: Http) { }

  consultarContratos(): Promise<any> {
    return this.http.get('http://localhost:8000/inmetrics/contratos')
      .toPromise()
      .then(response => response.json());
  }

  

}
