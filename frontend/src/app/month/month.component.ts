import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {ApiService} from "../api.service";
import {MatSelect} from "@angular/material/select";
import {animate, state, style, transition, trigger} from "@angular/animations";

let viewChild: any;
// @ts-ignore
viewChild = ViewChild("matSelect");

export interface Sessions {
  Date : string,
  Time : string,
  Bike : number,
  Cancel : boolean,
  Id : number,
  Subs : JSON[]
}

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class MonthComponent implements OnInit {
  private data: JSON[]=[];
  private value : number = null;
  private listSession : Sessions[]=[];
  displayedColumns: string[] = ['Date', 'Time', 'Bike', 'Status','Button'];
  displayedDetails: string[] = ['LastName', 'FirstName'];

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
      this.initSession(urldata);
    });
  }

  ngAfterViewInit(){
    this.matSelect.valueChange.subscribe(value => {

      this.value = value;

      this.api.getMonthJson(value).subscribe(urldata => {
        this.initSession(urldata);
      });
    });
  }

  subcribe(Id: any) {
    console.log("SUB!" + Id);
  }

  unSubcribe(id: any) {
    console.log("UNSUB!" + id);
  }

  initSession(urldata){

      this.listSession = [];
      let tempSess : Sessions;
      this.data = JSON.parse(JSON.stringify(urldata));

      for(let i = 0; i < this.data.length; i++){
        tempSess={
          Date:this.data[i]["Date"].split(' ')[0],
          Time:this.data[i]["time"].split(' ')[1],
          Bike:this.data[i]["bike"],
          Cancel:this.data[i]["Cancel"],
          Id:this.data[i]["id"],
          Subs:this.data[i]["idInscription"]
        };
        this.listSession.push(tempSess)
      }
    console.log(this.listSession)
  }

  toggleDetailsRow(row: any) {

  }
}
