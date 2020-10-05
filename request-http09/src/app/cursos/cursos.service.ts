import { environment } from '../../environments/environment';
import { delay, tap } from 'rxjs/operators';
import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
environment
  private readonly API = `${environment.API}${'cursos'}`;


  constructor(private http: HttpClient ) {
   }

  list(){
    return this.http.get<Curso[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }
}
