import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string="http://52.15.202.158:9090/login";

  constructor(public http:HttpClient) { }

      signIn(login:any) {
        return this.http.post(this.baseUrl+"/signIn", login,{responseType:'text'})
      }

      signUp(login:any) {
        return this.http.post(this.baseUrl+"/signUp", login,{responseType:'text'})
      }
}
