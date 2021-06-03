import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // Arrays of Fruits 
  Fruits = [
    {"name":"Apple"},
    {"name":"Mango"},
    {"name":"Banana"},
    {"name":"Cherry"},
  ];;

  // Increment And Decrement Functions 
  last1 = 1000;
  num1 = 10;

  plus() {
    if (this.num1 === this.last1) {
      console.log("disable");
    } else {
      this.num1++;
      console.log("Value of num1 after increment ", this.num1);
    }
  }
  minus() {
    if (this.num1 === this.last1) {
      console.log("disable");
    } else {
      this.num1--;
      console.log("Value of num1 after decr ", this.num1);
    }
  }
  

  constructor() { }


ngOnInit(){

}
title = "List of fruits Name:"
}
