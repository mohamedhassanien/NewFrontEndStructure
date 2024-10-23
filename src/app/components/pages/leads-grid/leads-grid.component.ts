import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';





@Component({
  selector: 'app-leads-grid',
  standalone: true,
  imports: [
    CdkDropList, 
    CdkDrag, 
    CdkDropListGroup,
    CommonModule, 
    MatMenuModule,
    MatButtonModule],
  templateUrl: './leads-grid.component.html',
  styleUrl: './leads-grid.component.scss'
})
export class LeadsGridComponent {
  
  @Input() Invitedata : any;
  @Input() AccountData : any;
  @Input() sentToProspect : any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  getScoreColor(score: number) {
    if (score == 1) return 'red';
    else if (score == 2) return 'yellow';
    else if (score == 3) return 'orange';
    else if (score == 4) return 'blue';
    else if (score == 5) return 'green';
    else return 'white';
  }
}
