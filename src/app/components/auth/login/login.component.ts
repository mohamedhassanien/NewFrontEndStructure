<<<<<<< HEAD
import {  Component, inject, OnInit } from '@angular/core';
=======
import { FormsModule } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { AuthService } from '../../../services/auth/auth.service';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { Component, inject, OnInit } from '@angular/core';
>>>>>>> a1132ab0cd336328a09cfb717125a27d68fc1026
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AuthService } from '../../../services/auth/auth.service';
=======
>>>>>>> a1132ab0cd336328a09cfb717125a27d68fc1026


@Component({
  selector: 'app-login',
  standalone: true,

  imports: [FormsModule, RouterModule ,CommonModule , MatIconModule ,ReactiveFormsModule, LottieComponent],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  
})
export class LoginComponent implements OnInit{
  constructor(){}
  
  showPassword:boolean = false ;
  loginForm!:FormGroup;

   loginObj:Login = {
     email: '',
     password: ''
   }

   options: AnimationOptions = {
    path: '/assets/Illustration.json',
  };


   ngOnInit(): void {
     this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
     })
     

   }

   auth = inject(AuthService)

   login(){
    console.log(this.loginObj)
    this.auth.login(this.loginObj.email, this.loginObj.password).subscribe((res:any)=>{
    
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
