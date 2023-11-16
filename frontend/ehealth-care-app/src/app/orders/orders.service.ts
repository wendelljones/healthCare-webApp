import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public baseUrl:string = "http://52.15.202.158:9090/ehealthcare/orders"
  constructor(public httpClient:HttpClient) { }

  orderPlaced(order:Order):Observable<any> {
    return this.httpClient.post(this.baseUrl+"/placeOrder",order,{responseType:'text'});
  }

  viewOrdersByUser(email:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/viewOrdersByUser?email="+email);
  }

  
}
