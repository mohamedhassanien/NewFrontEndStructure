import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

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

}
