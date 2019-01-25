// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
//http://13.234.50.32:8080/api/customers
//http://localhost:8080/api/customers
export class CustomerService {
  baseUrl = environment.apiURL;

  private customersUrl = environment.apiURL+'/customers';//'http://13.234.50.32:8080/api/customers';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer (customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions);
  }

  deleteCustomer (customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }

  updateCustomer (customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions);
  }
}