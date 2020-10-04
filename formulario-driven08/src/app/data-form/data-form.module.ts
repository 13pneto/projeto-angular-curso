import { FormDebugComponent } from './../shared/form-debug/form-debug.component';
import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    DataFormComponent,
  ],
})
export class DataFormModule { }
