import { Component } from '@angular/core';
import { MainActionsComponent } from "../../layout/main-actions/main-actions.component";
import { MainFilterComponent } from "../../layout/main-filter/main-filter.component";

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [MainActionsComponent, MainFilterComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent {
  btn_title = 'Add Lead'
}
