import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
export class LoginService {
  http = inject(HttpClient)


 
  login(email: any, password:any) {
    return this.http.post(environment.APIURL + `login/1?email=${email}&password=${password}`,  httpOptions)

  }
  

}
