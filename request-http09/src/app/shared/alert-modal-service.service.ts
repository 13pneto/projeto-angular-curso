import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertModalServiceService {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  handleError(title: string, message: string, closeBtnName: string, styleAlert?: string){
    this.bsModalRef = this.modalService.show(AlertModalComponent);

    this.bsModalRef.content.type = styleAlert;
    // this.bsModalRef.content.title = title;
    this.bsModalRef.content.message = message;
    // this.bsModalRef.content.closeBtnName = closeBtnName;
  }
}
