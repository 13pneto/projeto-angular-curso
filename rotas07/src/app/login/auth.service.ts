import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: Boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456'){
        this.usuarioAutenticado = true      //Autenticado
        this.mostrarMenuEmitter.emit(true); //Evento
        this.router.navigate(['/']);        //Redirecionar
      }
      else{
        false;
        this.mostrarMenuEmitter.emit(false);
      }
    console.log(this.usuarioAutenticado);
  }
  verificaUsuarioAutenticado(){
    return this.usuarioAutenticado;
  }
}
