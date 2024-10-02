import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { LoginService } from '../../../services/auth/login.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule ,CommonModule , MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword:boolean = false ;

   loginObj:Login = {
     email: '',
     password: ''
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
}
