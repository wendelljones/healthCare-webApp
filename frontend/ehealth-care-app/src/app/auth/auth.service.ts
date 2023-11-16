import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private baseSignUpUrl:string = "http://52.15.202.158:9090/login/signUp";
  private baseSignInUrl:string = "http://52.15.202.158:9090/login/signIn";
constructor(public http:HttpClient) { }
get isLoggedIn():Observable<boolean>{
  return this.loggedIn.asObservable();
}
logout() {
  this.loggedIn.next(false);
}
login() {
  this.loggedIn.next(true);
}

signIn(users:any):Observable<string> {
  return this.http.post(this.baseSignInUrl,users,{responseType:'text'});
}

signUp(users:any):Observable<string> {
  return this.http.post(this.baseSignUpUrl,users,{responseType:'text'});
}
  
}
