import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './views/mainview/mainview.component';

import {CustomerComponent} from './components/customer/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component'
//import { CustomerComponent } from './customer/customer.component';
//import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
