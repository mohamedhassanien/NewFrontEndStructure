import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { LoginService } from '../../../services/auth/login.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule ,CommonModule , MatIconModule ,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  showPassword:boolean = false ;
  loginForm!:FormGroup;

   loginObj:Login = {
     email: '',
     password: ''
   }

   ngOnInit(): void {
     this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
     })
     

   }

   loginServ = inject(LoginService)

   login(){
    console.log(this.loginObj)
    this.loginServ.login(this.loginObj.email, this.loginObj.password).subscribe((res:any)=>{
    
    })
   }

   togglePassswordVisiblity():void{
    this.showPassword = !this.showPassword;
   }

   onSubmit(loginForm:FormGroup){
    this.loginObj = loginForm.value;
    console.log(this.loginObj)
   }
}
