import { AuthGuard } from './../guards/auth-guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

//Rotas
const ALUNOS_ROUTES = [
    {path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard], children : [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent}
    ]},   
];

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}