import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CursosListaComponent},
  { path: 'novo', component: CursosFormComponent},
  { path: 'editar/:id', component: CursosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }