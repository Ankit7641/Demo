import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  clickMessage = '';
  clicks = 1;

  @Input() customer:Customer = new Customer();
  @Output() customerChange:EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe2(event: any) {
    const evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
  update(){
    this.customerChange.emit(this.customer);
  }

}
