// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.css']
// })
// export class CustomerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customers: Customer[];

  //constructor(private customerService: CustomerService) { }
  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    return this.customerService.getCustomers()
      .subscribe(
        customers => {
          console.log(customers);
          this.customers = customers
        }
      );
  }
  goBack(): void {
    this.location.back();
  }
}
