import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {ApiService} from "../api.service";
import {MatSelect} from "@angular/material/select";

let viewChild: any;
// @ts-ignore
viewChild = ViewChild("matSelect");

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})


export class MonthComponent implements OnInit {
  private data: JSON[]=[];
  private value : number = null;
  displayedColumns: string[] = ['Date', 'Time', 'Bike', 'Status'];

  months = [
    {name : "janvier", num : 1},
    {name : "fevrirer", num : 2},
    {name : "mars", num : 3},
    {name : "avril", num : 4},
    {name : "mai", num : 5},
    {name : "juin", num : 6},
    {name : "juillet", num : 7},
    {name : "aout", num : 8},
    {name : "septembre", num : 9},
    {name : "octobre", num : 10},
    {name : "novembre", num : 11},
    {name : "decembre", num : 12},
  ];

  constructor(private api: ApiService) { }

  @viewChild matSelect: MatSelect;

  ngOnInit() {
    let m = new Date();
    this.value = m.getMonth()+1;
    this.api.getMonthJson(this.value).subscribe(urldata => {
      this.data = JSON.parse(JSON.stringify(urldata));
    });
  }

  ngAfterViewInit(){
    this.matSelect.valueChange.subscribe(value => {
      this.value = value;
      this.api.getMonthJson(value).subscribe(urldata => {
        this.data = JSON.parse(JSON.stringify(urldata));
      });
    });
  }

}
