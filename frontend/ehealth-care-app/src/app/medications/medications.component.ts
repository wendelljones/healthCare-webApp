import { Component, OnInit } from '@angular/core';
import { MedicationsService } from '../medications.service';
import { Medications } from '../medications';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent implements OnInit{
  medications:Array<Medications>=[];
  searchData:any="";
  searchCategory:any="";
  categories: string[] = [];

  constructor(public medicationsService:MedicationsService, public cartService:CartService) {

  }

  ngOnInit(): void {
      this.loadAllMedications();
  }

  loadAllMedications(): void {
      this.medicationsService.findAll().subscribe({
        next:(data:any)=> {
          this.medications=data;
          this.categories = this.getCategories(data);
        },
        error:(error:any)=> {
          console.log(error)
        },
        complete:()=> {
          console.log("done")
        } 
      })
  }

  getCategories(data:any[]): string[] {
    const categories = data.map((item:any) => item.category);
    return [...new Set(categories)];
  
  }

  addToCart(medications:any) {
    medications.qty=1;
    this.cartService.addDataInCart(medications);
  }

}
