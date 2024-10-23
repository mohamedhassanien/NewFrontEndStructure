import { Component } from '@angular/core';
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
export class AddLeadComponent {
selectedTabIndex = 0;
//-------Score Variables------------
isRadio1Checked = false;
isDiv1Visible = false;

isRadio2Checked = false;
isDiv2Visible = false;

// Handles the button click (also triggered by the radio button)
onButton1Click() {
  // Toggle the radio button's checked state
  this.isRadio1Checked = !this.isRadio1Checked;
  // Display the div only if the radio button is checked
  this.isDiv1Visible = this.isRadio1Checked;
}

onButton2Click() {
  // Toggle the radio button's checked state
  this.isRadio2Checked = !this.isRadio2Checked;
  // Display the div only if the radio button is checked
  this.isDiv2Visible = this.isRadio2Checked;
}

// When the radio button is clicked, prevent default action and trigger button click
onRadio1Click(event: Event) {
  event.stopPropagation(); // Prevent the default radio button behavior
  this.onButton1Click();     // Trigger the button click logic
}
onRadio2Click(event: Event) {
  event.stopPropagation(); // Prevent the default radio button behavior
  this.onButton2Click();     // Trigger the button click logic
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



