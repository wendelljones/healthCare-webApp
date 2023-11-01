import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData = new BehaviorSubject<Cart[]>([]);
  constructor() { }


  get getCart(){
    return this.cartData.asObservable();
  }

  addDataInCart(medications:any) {
    this.getCart.subscribe({
      next:(data:any)=> {
          let result = data.find((c:any)=>c.name === medications.name);
          if(result === undefined){
            medications.qty = 1;
            data.push(medications);
            this.cartData.next(data);
            alert("Item added to cart");
          }
      },
      error:(error:any)=> {

      },
      complete:()=> {
        
      }
    })
  }

  removeDataFromCart(product:any,index:any) {
    console.log(product);
    this.getCart.subscribe({
      next:(data:any)=> {
        data.splice(index,1);
        alert("Item remove from cart")
      },
      error:(error:any)=> {

      },
      complete:()=> {
        
      }
    })
  }

}
