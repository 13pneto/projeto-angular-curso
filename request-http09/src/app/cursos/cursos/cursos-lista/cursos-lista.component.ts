import { AlertModalServiceService } from './../../../shared/alert-modal-service.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, pipe, empty, Subject } from 'rxjs';
import { CursosService } from './../../cursos.service';

import { Component, OnInit } from '@angular/core';
import { Curso } from '../../curso';
import { catchError } from 'rxjs/operators';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  //Ref. Modal
  bsModalRef: BsModalRef;

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  //cursos: Curso[];

  constructor(private service: CursosService, private serviceModal: AlertModalServiceService) { }

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados);

    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list()
    pipe(
      catchError(error => {
        console.error(error);
       // this.error$.next(true);
       this.handleError();
        return empty();
      })
    );
  }

  handleError(){
    this.serviceModal.handleError("Erro", "Tente novamente mais tarde", "Close", "warning");
  }

}
