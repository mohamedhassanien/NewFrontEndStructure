import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CheckboxModule } from 'primeng/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';


interface SelectItem {
  value:string;
  viewValue:string
}


@Component({
  selector: 'app-add-lead',
  standalone: true,
  imports: [
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CheckboxModule,
    MatDividerModule,
    CommonModule
  ],
  templateUrl: './add-lead.component.html',
  styleUrl: './add-lead.component.scss'
})
export class AddLeadComponent implements OnInit {
selectedTabIndex = 0;
selectedLeadType:string = '0';


ngOnInit(): void {

}

//-------Score Variables------------
selectedButton: number | null = null;

  // Handles button click and selects the corresponding button
  onButtonClick(buttonNumber: number) {
    this.selectedButton = buttonNumber; // Set the selected button
  }

  // Handles radio button click, which triggers the button logic
  onRadioClick(event: Event, buttonNumber: number) {
    event.stopPropagation(); // Prevent default radio button behavior
    this.onButtonClick(buttonNumber); // Trigger the same logic as the button click
  }

//----------------- New tag tab lists --------------------

sources: SelectItem[] = [
 { value:'Direct Message META', viewValue:'Direct Message META'},
 { value:'Facebook Groups', viewValue:'Facebook Groups'},
 { value:'Study in France FB Group', viewValue:'Study in France FB Group'},
 { value:'Prospection : INSTA', viewValue:'Prospection : INSTA'},
 { value:'Prospection : LINKEDIN', viewValue:'Prospection : LINKEDIN'},
 { value:'WOM', viewValue:'WOM'},
 { value:'Fair', viewValue:'Fair'},
 { value:'Ambassador', viewValue:'Ambassador'},
 { value: 'Cyrus', viewValue: 'Cyrus'},
 { value:'Oussama', viewValue:'Oussama'},
 { value:'Marwa', viewValue:'Marwa'},
 { value:'Manal', viewValue:'Manal'},
 { value:'Fatima', viewValue:'Fatima'},
 { value:'Houda', viewValue:'Houda'},
 { value:'Ali', viewValue:'Ali'},
 { value:'Karim', viewValue:'Karim'},
 { value:'Ani', viewValue:'Ani'},
 { value:'Abdelwahab', viewValue:'Abdelwahab'},
 { value:'Other', viewValue:'Other'},

];
fieldOfInterest:SelectItem[] =[
 {value:"Business / Management/ Analytics",viewValue:"Business / Management/ Analytics"},
 {value:"Marketing / Marketing Digital / Data",viewValue:"Marketing / Marketing Digital / Data"},
 {value:"Finance / Audit / Controle",viewValue:"Finance / Audit / Controle"},
 {value:"Supply Chain / Achat",viewValue:"Supply Chain / Achat"},
 {value:"HR",viewValue:"HR"},
 {value:"Luxury Management",viewValue:"Luxury Management"},
 {value:"Project Management",viewValue:"Project Management"},
 {value:"Mecanical / Aeronotic / Automobile Engeneering",viewValue:"Mecanical / Aeronotic / Automobile Engeneering"},
 {value:"IT ( Data Science, Computer Science, Informatique, Cybersecurity, etc )",viewValue:"IT ( Data Science, Computer Science, Informatique, Cybersecurity, etc )"},
 {value:"Civil Engeneering",viewValue:"Civil Engeneering"},
 {value:"Interior Architecture / Design",viewValue:"Interior Architecture / Design"},
 {value:"Fashion Design",viewValue:"Fashion Design"},
 {value:"Other",viewValue:"Other"},
];


  goToNextTab(){
   if(this.selectedTabIndex < 2){
    this.selectedTabIndex +=1;
   }
  }

  goToPreviousTab(){
    if(this.selectedTabIndex > 0){
      this.selectedTabIndex -=1;
    }
   }
 
}



