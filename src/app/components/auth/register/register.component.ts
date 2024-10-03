import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Register } from '../../../models/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
registerForm!:FormGroup;
registerObj:Register ={
  firstName:'',
  lastName:'',
  phoneNumber:'',
  email:'',
  country:'',
  age:'',
  password:'',
  rePassword:''
}
ngOnInit(): void {
  this.registerForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    country:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.pattern('[a-zA-Z0-9]{8,16}')])
  })
}


onSubmit(registerForm:FormGroup){
  this.registerObj = registerForm.value;
  console.log(this.registerObj)
}
}
