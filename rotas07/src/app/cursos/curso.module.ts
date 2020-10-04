import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from '../cursos/cursos.component';
import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from '../cursos/curso-nao-encontrado/curso-nao-encontrado.component';




@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CursosService
  ]
})
export class CursoModule { }
