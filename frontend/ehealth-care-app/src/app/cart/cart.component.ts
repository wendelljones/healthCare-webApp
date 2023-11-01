import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { OrdersService } from '../orders/orders.service';
import { Cart } from './cart';
import { AccountService } from '../account.service';
import { Order } from '../orders/orders';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

      cartInfo:Array<Cart>=[];
      user:any;
      constructor(public cartService:CartService,public ordersService:OrdersService,
        public accountService:AccountService) {
          
        }
        bankBalance:any;
        ngOnInit(): void {
            let obj = sessionStorage.getItem("user");
            console.log('User object from sessionStorage:', obj);
            if(obj!= null) {
              this.user = JSON.parse(obj);
            }
              this.cartService.getCart.subscribe({

                next:(data:any)=> {
                  this.cartInfo = data;
                  this.calculate();
                },
                error:(error:any)=> {

                },
                complete:()=> {

                }
              })
              this.accountService.findBalance(this.user?.emailid).subscribe({
                next:(result:any)=> {
                  this.bankBalance=eval(result);
                },
                error:(error:any)=> {
        
                },
                complete:()=> {
                  console.log("balance retreive")
                }
              })
        }
        cartFlag:boolean = true;
        totalPrice:number =0;
        increment(cart:any,i:number){
          this.cartInfo[i].qty=eval(cart.qty)+1;
          this.calculate();
        }
        remove(cart:any,i:number){
          this.cartService.removeDataFromCart(cart,i);
          this.calculate();
        }
        decrement(cart:any,i:number) {
          this.cartInfo[i].qty=eval(cart.qty)-1;
          this.calculate();
        }

        calculate():void {
          this.totalPrice= this.cartInfo.reduce((previousValue:any,currentValue:any)=> {
            console.log(previousValue+" "+currentValue.qty+" "+currentValue.price);
            return previousValue+currentValue.qty *currentValue.price;
          },0);

          this.totalPrice = parseFloat(this.totalPrice.toFixed(2));

        }

        paymentFlag:boolean = false;
        submitPayment() {
          console.log(this.user);

          let orderDetails = new Order();
          orderDetails.orderid=this.user.orderid;
          orderDetails.orderDate=new Date();
          console.log(orderDetails.orderDate);
          orderDetails.medications = [...this.cartInfo];
          orderDetails.totalItems=this.cartInfo.length;
          orderDetails.shipmentCharges=100;
          orderDetails.totalAmount=this.totalPrice;
          orderDetails.email=this.user.emailid;
          console.log(orderDetails.medications);
          console.log(orderDetails);
          this.ordersService.orderPlaced(orderDetails).subscribe({
            next:(result:any)=> {
              console.log(result);
              alert(result);
            },
            error:(error:any)=> {
              console.log(error)
            },
            complete:()=> {
              console.log("order placed successfully")
            }
          })
          this.cartInfo.splice(0,this.cartInfo.length);
          this.totalPrice=0;
          this.cartFlag = false;
          this.paymentFlag = false;
        }
        b1:string ="Processed for Payment";
        flag:boolean = false;
        doPayment(){
          this.cartFlag=false;
          this.paymentFlag=true;
          if(this.bankBalance>=this.totalPrice){
            this.b1="Submit Payment"
            this.flag = false;
          }else {
            this.b1="Insufficient Amount"
            this.flag=true;
          }
        }
}
