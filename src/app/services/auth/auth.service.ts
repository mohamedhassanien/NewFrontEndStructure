import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({

    'Access-Control-Allow-Origin':'http://localhost:49581',
    'Access-Control-Allow-Credentials': 'true'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  
  register(formData:any){
    return this.http.post(environment.APIURL + `registser` , formData , httpOptions)
  }
  login(email: any, password:any) {
    return this.http.post(environment.APIURL + `login/1?email=${email}&password=${password}`,  httpOptions)
  }
  forgotPassword(email:string){
    return this.http.post(environment.APIURL + `student/forgetpassword?email=${email}` , httpOptions)
  }
}
