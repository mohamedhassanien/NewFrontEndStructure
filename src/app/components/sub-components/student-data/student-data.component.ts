import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditLeadComponent } from '../edit-lead/edit-lead.component';
@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [
    EditLeadComponent
  ],
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
  openModal(element: any, className: string, size: string, data: any[]) {
    this._ModalService.open(element, { windowClass: className, size: size });
  }

  closeModal(){
    this._ModalService.dismissAll();
  }
}
