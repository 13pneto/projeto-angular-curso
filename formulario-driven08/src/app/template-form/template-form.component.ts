 import { ConsultaCepService } from './../shared/services/consulta-cep.service';
// import { Observable, Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';;
 import { HttpClient } from '@angular/common/http';
 import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: 'pedro.neto@korp.com.br',
    cep: '81030020',
    numero: 279,
    complemento: 'Barracão',
    rua:  '',
    bairro: '',
    cidade: '',
    estado: ''
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit(): void {


  }

  onSubmit(form){
    var objJson = JSON.stringify(form.value);
    this.http.post('https://httpbin.org/post', objJson).
      //map(res => res))
      subscribe(dados => console.log(dados));
    console.log(form);
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
  //   return{
  //     'has-error': this.verificaValidTouched(campo),
  //     'has-feedback': this.verificaValidTouched(campo)
  // }
  }

  buscaCEP(cep){
    console.log(cep);

    if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

         //Valida o formato do CEP.
        if(validacep.test(cep)) {
          this.cepService.buscaCEP(cep).subscribe((dados: any) => {
               console.log(dados);
               this.usuario.rua = dados.logradouro;
               this.usuario.bairro = dados.bairro,
               this.usuario.cidade = dados.localidade;
               this.usuario.estado = dados.uf;
             });

          //  this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
          //   //map(dados => JSON.parse(dados)))
          // .subscribe((dados: any) => {
          //   console.log(dados);
          //   this.usuario.rua = dados.logradouro;
          //   this.usuario.bairro = dados.bairro,
          //   this.usuario.cidade = dados.localidade;
          //   this.usuario.estado = dados.uf;
          // });
     }
   }
}

}
