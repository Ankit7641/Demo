import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  clickMessage = 'Value will be changed';

  customers: Customer[] = [
    {customerNo: 1, customername:'Ankit',city:'valsad',mobileno:52365789652},
    {customerNo: 2, customername:'Amit',city:'Surat',mobileno:9852364147},
    {customerNo: 3, customername:'Dhruvit',city:'Vapi',mobileno:9874563210},
    {customerNo: 4, customername:'Dhaval',city:'Bilimora',mobileno:9852147963}
  ]

  selectedCustomer:Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(customer:Customer){
    this.selectedCustomer = Object.assign({},customer)
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  update(customer:Customer) {
    console.log(customer)
    var cust=this.customers.find(e => e.customerNo==customer.customerNo)
    Object.assign(cust,customer)
    alert("Customer Saved")
  }



}
