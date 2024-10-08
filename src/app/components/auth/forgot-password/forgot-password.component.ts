import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
forgotPassForm!:FormGroup;

auth = inject(AuthService)

  ngOnInit(): void {
    this.forgotPassForm = new FormGroup({
     email: new FormControl ('',[Validators.required,Validators.email])
    })
}

forgotPassword(email:string){
  this.auth.forgotPassword(email).subscribe((data)=>{
    console.log(data)
  })
}
}
