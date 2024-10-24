import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Register } from '../../../models/register.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
showPassword:boolean = false;
showRepass:boolean = false;
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
onSubmit: any;
ngOnInit(): void {
  this.registerForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    country:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.pattern('[a-zA-Z0-9]{8,16}')]),
    repassword:new FormControl('',Validators.required)
  })
}
auth = inject(AuthService)
togglePasswordVisiblity():void{
  this.showPassword = !this.showPassword;
}
toggleRepassVisiblity():void{
  this.showRepass = !this.showRepass
}

register(){
this.auth.register(this.registerObj).subscribe((data:any)=>{
   console.log(data)
})
}

// onSubmit(registerForm:FormGroup){
//   this.registerObj = registerForm.value;
//   console.log(this.registerObj)
// }
}
