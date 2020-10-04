import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Rotas
const LOGIN_ROUTES = [
    {path: 'login', component: LoginComponent, children : [
        // {path: 'novo', component: AlunoFormComponent},
        // {path: ':id', component: AlunoDetalheComponent},
        // {path: ':id/editar', component: AlunoFormComponent}
    ]},   
];

@NgModule({
    imports: [RouterModule.forChild(LOGIN_ROUTES)],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}