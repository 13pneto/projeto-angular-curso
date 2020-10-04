import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth-guard';
import { NgModule } from '@angular/core';

//IMPORTS

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Codigo
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: '**', component: PaginaNaoEncontradaComponent },
    // { path: 'cursos', component: CursosComponent },
    // { path: 'cursos/:id', component: CursoDetalheComponent },
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);



@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}