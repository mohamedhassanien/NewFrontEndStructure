import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MainActionsComponent } from "../../layout/main-actions/main-actions.component";
import { MainFilterComponent } from "../../layout/main-filter/main-filter.component";


import { Leads } from '../../../models/leads';
import { LeadsService } from '../../../services/components/leads.service';
import {MatTabsModule} from '@angular/material/tabs';



import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';




import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';




import {
  SearchCountryField,
  CountryISO
} from "ngx-intl-tel-input";

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
    NgxIntlTelInputModule,
    BadgeModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,MatTabsModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss',
  providers: [LeadsService]

})
export class LeadsComponent {
  btn_title = 'Add Lead'
  leads!: Leads[];
  scores: number[] = [1, 2, 3, 4, 5];
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

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];


  constructor(private leadsService: LeadsService, private _Router: Router, private _ModalService: NgbModal,) {

  }


  editingRow: any = null;

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

  ngOnInit() {
    this.leadsService.getProductsMini().then((data: any) => {
      this.leads = data;
    });
  }
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
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

  sendToMe(name: any) {

  }
  assignToEmployee(leadName: any, empName: any) {

  }
  sendToProspect(leadsName:any){

  }
  openModalArchive(leadsName:any){

  }
  
}



