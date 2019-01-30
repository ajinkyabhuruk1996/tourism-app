//Imports for packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';

//Imports for global components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './views/mainview/mainview.component';

//Imports related to customer component
import {CustomerComponent} from './components/customer/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component'
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';

//Imports related to login
import { fakeBackendProvider } from './views/loginview/_helpers';
import { JwtInterceptor, ErrorInterceptor } from './views/loginview/_helpers';
import { AlertComponent } from './views/loginview/_directives';
import { AuthGuard } from './views/loginview/_guards';
import { AlertService, AuthenticationService, UserService } from './views/loginview/_services';
import { HomeComponent } from './views/loginview/home';
import { LoginComponent } from './views/loginview/login';
import { RegisterComponent } from './views/loginview/register';
import { NavbarHorizontalComponent } from './components/navbar/navbar_horizontal/navbar-horizontal/navbar-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarHorizontalComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
