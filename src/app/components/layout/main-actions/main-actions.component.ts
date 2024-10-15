import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-actions',
  standalone: true,
  imports: [],
  templateUrl: './main-actions.component.html',
  styleUrl: './main-actions.component.scss'
})
export class MainActionsComponent implements OnInit {
  className = 'main-modal'
  
  @Input() addTitle : any;
  @Output() childEmitter: EventEmitter<any> = new EventEmitter()
  

  ngOnInit(): void {
  }
  getChildData(){
    this.childEmitter.emit(this.className)

  }

}
