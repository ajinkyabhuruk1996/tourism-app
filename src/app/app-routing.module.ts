// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from '../app/components/customer/customer/customer.component';
//import { CustomerComponent } from '../../comcustomer/customer.component';
import { AddCustomerComponent } from '../app/components/customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../app/components/customer/customer-details/customer-details.component';


//imports for login related components
import {HomeComponent} from './views/loginview/home';
import {LoginComponent} from './views/loginview/login';
import {RegisterComponent} from './views/loginview/register';
import {AuthGuard} from './views/loginview/_guards';
 
const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },   { 
     path: 'customers', 
     component: CustomerComponent ,
     canActivate: [AuthGuard]
   },
   { 
     path: 'customer/add', 
     component: AddCustomerComponent,
     canActivate: [AuthGuard] 
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent,
     canActivate: [AuthGuard] 
   },
   { 
     path: '', 
     redirectTo: 'login', 
     pathMatch: 'full'
   },
   // otherwise redirect to home
   { path: '**', redirectTo: '' } 
];


//useHash: true when 404 occurs ,it will redirect to base url appending #. Need more info on this-ajinkya
@NgModule({  
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ],
  exports: [ RouterModule ]
})
 
export class AppRoutingModule {}