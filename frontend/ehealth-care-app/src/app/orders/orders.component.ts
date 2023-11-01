import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user:any;
  // orders:Array<any>=[];
  orders?:Array<any>;
dateInfo: any;
medications: any;

    constructor(public os:OrdersService){
      
    }
  ngOnInit(): void {
      let obj = sessionStorage.getItem("user");
      console.log(obj);
      if(obj!=null){
        this.user= JSON.parse(obj);
      }
      console.log(this.user.emailid);
      this.os.viewOrdersByUser(this.user.emailid).subscribe({
        next:(result:any)=> {
          console.log(result)
          this.orders=result;
        },
        error:(error:any)=> {
          console.log(error)
        },
        complete:()=> {
          console.log("view orders details");
        }
      })
  }

}
