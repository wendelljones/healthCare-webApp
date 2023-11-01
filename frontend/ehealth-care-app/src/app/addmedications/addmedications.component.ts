import { Component } from '@angular/core';
import { MedicationsService } from '../medications.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addmedications',
  templateUrl: './addmedications.component.html',
  styleUrls: ['./addmedications.component.css']
})
export class AddmedicationsComponent {

  medicationsRef = new FormGroup({
    name:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    category:new FormControl(),
    image:new FormControl(),
    qty:new FormControl(),
  })
  msg:string = "";
  constructor(public medicationsService:MedicationsService) {}

  storeMedications() {
    let medications = this.medicationsRef.value;
    this.medicationsService.storeMedications(medications).subscribe({
      next:(result:any)=> {
        this.msg = result;
      },
      error:(error:any)=> {
        this.msg = error;
        console.log(error)
      },
      complete:()=> {
        console.log("done!")
      }
    })

    this.medicationsRef.reset();
  }

}
