import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MainActionsComponent } from "../../layout/main-actions/main-actions.component";
import { MainFilterComponent } from "../../layout/main-filter/main-filter.component";

import { Leads } from '../../../models/leads';
import { LeadsService } from '../../../services/components/leads.service';
import { MatTabsModule } from '@angular/material/tabs';

import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectItem } from 'primeng/api';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { StudentDataComponent } from "../../layout/student-data/student-data.component";
import { AddLeadComponent } from "../add-lead/add-lead.component";
import { LeadsGridComponent } from "../leads-grid/leads-grid.component";

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [MainActionsComponent,
    MainFilterComponent,
    TableModule,
    CommonModule,
    FormsModule,
    ProgressBarModule,
    DropdownModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    BadgeModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MultiSelectModule,
    StudentDataComponent,
    InputTextModule,
    MatTabsModule,
    AddLeadComponent,
    LeadsGridComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss',
  providers: [LeadsService]

})
export class LeadsComponent {
  btn_title = 'Add Lead'
  leads!: Leads[];
  scores: number[] = [1, 2, 3, 4, 5];
  commentForm!: FormGroup;
  archiveCommentForm!: FormGroup;
  editingRow: any = null;
  commentObj: any;
  archiveCommentObj: any;

  displayListView = true;
  displayGridView = false;
  inviteData: any;
  accountCreatedList: any;

  employees: any[] = [{
    name: "Ali",
  },
  {
    name: "Nicolas",
  }, {
    name: "Salah",
  },
  {
    name: "Cyrus Alborzi",
  },
  {
    name: "Ei Mya HMUE KHIN",
  },
  {
    name: "Fatima Zaari",
  },
  {
    name: "Hasnae srayi",
  },
  {
    name: "Houda Berrada",
  }
  ];
  sources: SelectItem[] = [
    { label: 'Direct Message META', value: 'Direct Message META' },
    { label: 'Facebook Groups', value: 'Facebook Groups' },
    { label: 'Study in France FB Group', value: 'Study in France FB Group' },
    { label: 'WhatsApp Groups', value: 'WhatsApp Groups' },
    { label: 'Prospection : INSTA', value: 'Prospection : INSTA' },
    { label: 'Prospection : LINKEDIN', value: 'Prospection : LINKEDIN' },
    { label: 'WOM', value: 'WOM' },
    { label: 'Fair', value: 'Fair' },
    { label: 'Ambassador', value: 'Ambassador' },
    { label: 'Cyrus', value: 'Cyrus' },
    { label: 'Oussama', value: 'Oussama' },
    { label: 'Marwa', value: 'Marwa' },
    { label: 'Manal', value: 'Manal' },
    { label: 'Fatima', value: 'Fatima' },
    { label: 'Meta Ads', value: 'Meta Ads' },
    { label: 'Houda', value: 'Houda' },
    { label: 'Ani', value: 'Ani' },
    { label: 'Abdelwahab', value: 'Abdelwahab' },
    { label: 'Website', value: 'Website' },
    { label: 'Ali', value: 'Ali' },
    { label: 'Karim', value: 'Karim' },
    { label: 'Hiba EL Barkaoui', value: 'Hiba EL Barkaoui' },
    { label: 'Ez-eddine Douieb', value: 'Ez-eddine Douieb' },
    { label: 'Halima Couki', value: 'Halima Couki' },
    { label: 'Manal elkobbi', value: 'Manal elkobbi' },
    { label: 'Other', value: 'Other' },
  ];
  tags: SelectItem[] = [
    { label: 'Data Science', value: 'Data Science' },
    { label: 'Computer Science', value: 'Computer Science' },
    { label: 'Informatique', value: 'Informatique' },
    { label: 'Cybersecurity', value: 'Cybersecurity' }
  ]
  constructor(private leadsService: LeadsService, private _Router: Router, private _ModalService: NgbModal) {

  }

  ngOnInit() {
    this.leadsService.getProductsMini().then((data: any) => {

      this.leads = data;
      const invitedData = data.filter((val: any) => val.status === "Invited lead");
      this.inviteData = invitedData;

      const accountData = data.filter((val: any) => val.status === "Account Created");
      this.accountCreatedList = accountData;
    });
    this.commentForm = new FormGroup({
      comment: new FormControl('', [Validators.required, Validators.email]),
    })
    this.archiveCommentForm = new FormGroup({
      archiveComment: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  editCell(rowData: any, field: string) {
    this.editingRow = rowData;
    rowData.editing = true;

    console.log('doble')
  }

  onRowEditSave(rowData: any) {
    rowData.editing = false;
    // Add any save logic here
  }

  onRowEditCancel(rowData: any) {
    rowData.editing = false;
  }
  getProgressColor(days: number): string {
    if (days <= 5) return 'progress-green';
    else if (days <= 10) return 'progress-yellow';
    else if (days <= 20) return 'progress-orange';
    else if (days <= 25) return 'progress-red';
    return 'progress-red';
  }

  setProgressValue(value: number) {
    let max = 25;
    if (value > max) {
      value = 25;
    }
    return (value / max) * 100;
  }
  getScoreColor(score: number) {
    if (score == 1) return 'red';
    else if (score == 2) return 'yellow';
    else if (score == 3) return 'orange';
    else if (score == 4) return 'blue';
    else if (score == 5) return 'green';
    else return 'white';
  }


  openModal(element: any, className: string, size: string, data: any[]) {
    this._ModalService.open(element, { windowClass: className, size: size });
  }
  closeModal() {
    this._ModalService.dismissAll();
  }

  sendToMe(name: any) {

  }
  assignToEmployee(leadName: any, empName: any) {

  }
  sendToProspect(leadsName: any) {

  }
  openModalArchive(leadsName: any) {

  }
  onCommentSubmit(commentForm: FormGroup) {
    this.commentObj = commentForm.value;
  }
  onArchiveCommentSubmit(archiveComment: FormGroup) {
    this.archiveCommentObj = archiveComment.value;
  }
  showGridView() {
    this.displayListView = false;
    this.displayGridView = true;
  }
  showListView() {
    this.displayListView = true;
    this.displayGridView = false;
  }
}



