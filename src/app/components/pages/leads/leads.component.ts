import { Component, OnInit } from '@angular/core';
import { MainActionsComponent } from "../../layout/main-actions/main-actions.component";
import { MainFilterComponent } from "../../layout/main-filter/main-filter.component";

import { Leads } from '../../../models/leads';
import { LeadsService } from '../../../services/components/leads.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [MainActionsComponent, MainFilterComponent, TableModule, CommonModule, FormsModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss',
  providers: [LeadsService]

})
export class LeadsComponent {
  btn_title = 'Add Lead'

  leads!: Leads[];

  constructor(private leadsService: LeadsService) { }


  ngOnInit() {
    this.leadsService.getProductsMini().then((data:any) => {
      this.leads = data;
    });
  }
}



