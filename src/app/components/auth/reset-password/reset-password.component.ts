import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit{
 showPassword:boolean = false;
 showRepass:boolean = false; 
ngOnInit(): void {
  
}

  togglePasswordVisiblity():void{
    this.showPassword = !this.showPassword;
  }
  toggleRepassVisiblity():void{
    this.showRepass = !this.showRepass;
  }
}
