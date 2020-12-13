import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-persons-list',
  templateUrl: './sales-persons-list.component.html',
  styleUrls: ['./sales-persons-list.component.css']
})
export class SalesPersonsListComponent implements OnInit {
  salesTeam = 'Sales Team';
  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Bageeradha","Vajja","bageeradhavajja@gmail.com",500),
    new SalesPerson("Raghu","CK","raghuck@gmail.com",300),
    new SalesPerson("Venkat","Tirakala","venkat@gmail.com",200),
    new SalesPerson("Harish","Pundla","hpundla@gmail.com",100)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
