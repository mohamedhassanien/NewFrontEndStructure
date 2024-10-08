import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { LoginService } from '../../../services/auth/login.service';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, LottieComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   loginObj:Login = {
     email: '',
     password: ''
   }
   options: AnimationOptions = {
    path: '/assets/Illustration.json',
  };
   loginServ = inject(LoginService)

   login(){
    console.log(this.loginObj)
    this.loginServ.login(this.loginObj.email, this.loginObj.password).subscribe((res:any)=>{
    
    })
   }

}
