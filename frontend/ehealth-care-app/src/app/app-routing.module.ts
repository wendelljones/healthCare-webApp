import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { SignupComponent } from './signup/signup.component';
import { MedicationsComponent } from './medications/medications.component';
import { AddmedicationsComponent } from './addmedications/addmedications.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signUp", component:SignupComponent},
  {path:"adminhome", component:AdmindashboardComponent, children:[
    {path:"addMedications", component:AddmedicationsComponent}
  ]},
  {path:"patienthome", component:PatientdashboardComponent, children:[
    {path:"viewMedications", component:MedicationsComponent},
    {path:"viewCart", component:CartComponent},
    { path:"viewOrders", component:OrdersComponent}
  ]},
  {path:"login", component:LoginComponent},
  {path:"medications", component:MedicationsComponent},
  {path:"orders", component:OrdersComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"contactus", component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
