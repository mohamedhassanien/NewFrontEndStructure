import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.scss'
})
export class StudentDataComponent {

  constructor(private _ModalService: NgbModal) {

  }

  closeModal(){
    this._ModalService.dismissAll();
  }
}
