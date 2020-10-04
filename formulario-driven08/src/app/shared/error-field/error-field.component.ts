import { FormValidations } from './../form-validations';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.css']
})
export class ErrorFieldComponent implements OnInit {

  //@Input() mostrarErro: boolean;
  //@Input() mensagemErro: string;

  
  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage(){

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }
    return null;
  }

}
