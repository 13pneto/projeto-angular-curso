import { BaseFormComponent } from './../shared/base-form/base-form.component';
import { VerificaEmailService } from './services/verifica-email.service';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { EstadoBr } from './../../assets/dados/estado-br.model';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {


//formulario: FormGroup;
//estados: EstadoBr[];
estados: Observable<EstadoBr[]>;
tecnologias: any[];
newsletterOP: any[];
frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
    ) {
      super();
    }

  ngOnInit(): void {

    this.estados = this.dropdownService.getEstadosBR();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOP = this.dropdownService.getNewsLetter();

    console.log(this.tecnologias);

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email:  [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      emailConfirm:  [null, [this.emailConfirmValidator('email')]],
      endereco: this.formBuilder.group({
          cep: [null, [Validators.required, this.cepValidator]],
          numero: [null, [Validators.required]],
          complemento: [null],
          rua: [null, [Validators.required]],
          bairro: [null, [Validators.required]],
          cidade: [null, [Validators.required]],
          estado: [null, [Validators.required]]
      }),
      tecnologias: [null],
      newsletter: ['s'],
      termos: [false, Validators.requiredTrue],
      frameworks: this.buildFrameworks()
    });

    this.formulario.get('endereco.cep').statusChanges
    .pipe(
      distinctUntilChanged(), //??
      tap(value => console.log('status CEP:', value)),
      switchMap(status => status === 'VALID' ?
        this.consultaCepService.buscaCEP(this.formulario.get('endereco.cep').value)
        : empty()
      )
    )
    .subscribe(dados => dados ? this.populaDadosForm(dados) : {});
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, this.requiredMinCheckbox(1));
  }

  requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      /* const values = formArray.controls;
      let totalChecked = 0;

      for (let i=0; i<values.length; i++ ) {
        if(values[i].value) {
         totalChecked += 1;
        }
      }*/

      //PROGRAMAÇÃO FUNCIONAL

      const totalChecked = formArray.controls
     .map(v => v.value)
     .reduce((total, current) => current ? total + current : total, 0);

      return totalChecked >= min ? null: {required: true};
    };
    return validator;
  }

  emailConfirmValidator(otherField: string){
    const validator = (formControl: FormControl) => {
      if(otherField == null ){
        throw new Error('É necessário informar um campo')
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls){
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);
      if (!field) {
        throw new Error("É necessário informar um campo válido")
      }

      if (field.value !== formControl.value) {
        return {emailConfirmValidator : "Erro confirmação dos campos"};
      }
    };
    return validator;
   }

  // tslint:disable-next-line: typedef
  cepValidator(control: FormControl) {
    const cep = control.value;
    if(cep && cep !== ''){
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido : true };
    }
    return null;
  }
  submit() {
    // var objJson = JSON.stringify(this.formulario.value);
    // this.http.post('https://httpbin.org/post', objJson).
    // subscribe(dados => {
    //     console.log(dados);
    //     console.log(this.formulario);
    //     //this.resetar();
    //     },
    //     (error: any) => alert('erro'));
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });

    console.log(valueSubmit);

    this.http
        .post('https://httpbin.org/post', JSON.stringify({}))
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            // this.formulario.reset();
            // this.resetar();
          },
          (error: any) => alert('erro')
        );
  }

  // tslint:disable-next-line: typedef
  onSubmit(){

    }


   resetar(){
  //this.formulario.reset();
   }

verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

verificaRequired(campo){
    return this.formulario.get(campo).hasError('required') && this.formulario.get(campo).touched;
  }
aplicaCssErro(campo){
  //   return{
  //     'has-error': this.verificaValidTouched(campo),
  //     'has-feedback': this.verificaValidTouched(campo)
  // }
  }

verificaEmail(){
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors){
      if(campoEmail.errors['required'] && campoEmail.touched){
        return "Email obrigatório";
      }
      if(campoEmail.errors['email'] && campoEmail.touched){
        return "Email inválido";
      }
    }
    }


buscaCEP(){

    let cep = this.formulario.get('endereco.cep').value;
    if(cep != null && cep !== ''){
      this.consultaCepService.buscaCEP(cep).
      subscribe((dados: any) => this.populaDadosForm(dados));
    }

//     console.log(cep);

//     if (cep !== ""){
//         // Expressão regular para validar o CEP.
//         var validacep = /^[0-9]{8}$/;

//          //Valida o formato do CEP.
//         if(validacep.test(cep)) {

//            this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
//           .subscribe((dados: any) => {
//             console.log(dados);
//             this.populaDadosForm(dados);

//           });
//      }
//    }
 }

populaDadosForm(dados){
  this.formulario.patchValue(
    {
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    }
    });
}

validarEmail(formControl: FormControl) {
  return this.verificaEmailService.verificarEmail(formControl.value)
  .pipe(
    map(emailExiste => emailExiste ? {emailInvalido : true} : null)
  );
}

}
