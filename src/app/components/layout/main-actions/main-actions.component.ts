import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-actions',
  standalone: true,
  imports: [],
  templateUrl: './main-actions.component.html',
  styleUrl: './main-actions.component.scss'
})
export class MainActionsComponent {
  @Input() addTitle : any;



}
