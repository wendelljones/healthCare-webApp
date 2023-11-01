import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medications } from './medications';

@Injectable({
  providedIn: 'root'
})
export class MedicationsService {
  baseUrl:string="http://18.218.191.62:9090/medications";

  constructor(public http:HttpClient) { }

  storeMedications(medications:any):Observable<string> {
    return this.http.post(this.baseUrl+"/store", medications,{responseType:'text'});
  }

  findAll():Observable<Medications[]> {
    return this.http.get<Medications[]>(this.baseUrl+"/findAll");
  }

}
