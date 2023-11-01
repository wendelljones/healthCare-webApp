import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MedicationsComponent } from './medications/medications.component';
import { AddmedicationsComponent } from './addmedications/addmedications.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';
import { SearchPipe } from './search.pipe';
import { CategoryPipe } from './pipes/search/category.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    PatientdashboardComponent,
    MedicationsComponent,
    AddmedicationsComponent,
    OrdersComponent,
    CartComponent,
    LandingComponent,
    AccountComponent,
    SearchPipe,
    CategoryPipe,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
