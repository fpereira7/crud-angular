import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';

@Injectable()
export class ContratoService {

  constructor(private http: Http) { }

  listar(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/inmetrics/contratos`)
      .toPromise()
      .then(response => response.json());
  }

  listarPorId(id: number): Promise<any> {
     return this.http.get(`${environment.apiUrl}/inmetrics/contratos/${id}`)
      .toPromise()
      .then(response => response.json());
  }



}
