import { AuthGuard } from './guards/auth-guard';
import { AuthService } from './login/auth.service';
import { LoginModule } from './login/login.module';
import { AlunosModule } from './alunos/alunos.module';
import { CursoModule } from './cursos/curso.module';
//import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosRoutingModule } from './alunos/alunos.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    AlunosModule,
    LoginModule
    //routing
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
