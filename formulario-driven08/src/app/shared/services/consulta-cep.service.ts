import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  buscaCEP(cep: string){
    console.log(cep);

    if (cep !== ""){
        // Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

         //Valida o formato do CEP.
        if(validacep.test(cep)) {

          return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
         }
   }

   return of({});
}
}
