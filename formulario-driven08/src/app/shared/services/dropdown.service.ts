import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from 'src/assets/dados/estado-br.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBR( ): Observable<EstadoBr[]> {
return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
// .pipe(
// map((res: Response) =>{
//   console.log(res);
  // return res.json();
// }
  // ));
  }

  // this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  // .subscribe((dados: any) => {
  //   console.log(dados);
  //   this.populaDadosForm(dados);

  // });

  getTecnologias() {
    return [
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'Javascript'},
      {nome: 'ruby', desc : 'Ruby'},
      {nome: 'php', desc: 'PHP'}
    ];
  }

  getNewsLetter() {
    return [
        {valor: 's', desc: 'Sim'},
        {valor: 'n', desc: 'Não'}
    ];
  }
}
