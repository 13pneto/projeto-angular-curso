import { HttpClientModule } from '@angular/common/http';
import { DropdownService } from './services/dropdown.service';
import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorFieldComponent } from './error-field/error-field.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorFieldComponent
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
