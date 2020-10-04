import { Injectable } from '@angular/core';

@Injectable()
export class CursosService{
     
    private cursos: string[] = ['Teste1', "Teste2", "Teste3"];
 
    constructor(){
        console.log('');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }
    
}