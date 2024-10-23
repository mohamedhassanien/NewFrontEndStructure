import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.scss'
})
export class StudentDataComponent {

  @Input() leadName : any;
  @Input() studentEmail : any;
  @Input() PhoneNumber : any;
  @Input() nationality : any;
  @Input() representative : any;
  @Input() source : any;
  @Input() previousSchool : any;
  @Input() soi : any;
  @Input() foi : any;
  @Input() intakeM : any;
  @Input() intakeY : any;

  constructor(private _ModalService: NgbModal) {

  }

  closeModal(){
    this._ModalService.dismissAll();
  }
}
