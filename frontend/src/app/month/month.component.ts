import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {ApiService} from "../api.service";
import {AuthService} from "../auth.service";
import {CookieService} from "ngx-cookie-service";
import {Inscription, Sessions, User} from "../Interface/Interface.module";

import {MatSelect} from "@angular/material/select";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


let viewChild: any;
// @ts-ignore
viewChild = ViewChild("matSelect");

let viewChild2: any;
// @ts-ignore
viewChild2 = ViewChild("matSelect2");

export interface Person {
  user : JSON;
}

@Component({
  selector: 'list-person-detail',
  templateUrl: './list-person-detail.component.html',
})
export class ListPersonDialog {
  PersonCol: string[] = ['User'];
  constructor(
    public dialogRef: MatDialogRef<ListPersonDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Person[]) {}

    onNoClick(): void {
    this.dialogRef.close();
  }

}

//todo display month selection + year selection error
//todo display sub + unsub error

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})

export class MonthComponent implements OnInit, AfterViewInit {
  private data: JSON[]=[];
  private value : number = null;
  private listSession : Sessions[]=[];
  private dataSource: MatTableDataSource<Sessions>;
  private listPerson : Person[]=[];
  private listYear: number[]=[];
  private year: number;
  private user: User;
  private listIdSession: number[]=[];
  displayedColumns: string[] = ['Date', 'Time', 'Bike', 'Status','Info','Action'];


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


  constructor(private api: ApiService,
              public dialog: MatDialog,
              private auth:AuthService,
              private cookie: CookieService) {
    this.user = this.auth.getCurrentUser();

  }

  @viewChild matSelect: MatSelect;
  @viewChild2 matSelect2: MatSelect;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


//todo: test block sub when no more abonnement left or when session is full

  ngOnInit() {
    let m = new Date();
    this.value = m.getMonth()+1;
    this.year = m.getFullYear();

    this.getYear();
    this.api.getMonthJson(this.value,this.year.toString()).subscribe(urldata => {
      this.initSession(urldata);
    });

  }

  ngAfterViewInit(){

    this.matSelect.valueChange.subscribe(value => {
      this.value = value;
      this.api.getMonthJson(value,this.year.toString()).subscribe(urldata => {
        this.initSession(urldata);
      });
    });

    this.matSelect2.valueChange.subscribe(value => {
      this.year = value;
      this.api.getMonthJson(this.value,this.year.toString()).subscribe(urldata => {
        this.initSession(urldata);
      });
    });

    this.api.getMonthJson(this.value,this.year.toString()).subscribe(urldata => {
      this.initSession(urldata);
    });
  }

  subcribe(Id: number) {
    let tempInscription : Inscription={
      Username:this.user.username,
      Id: Id
    };

    this.api.createInscription(tempInscription).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngAfterViewInit();
      }
    });
  }

  unSubcribe(id: number) {
    let tempInscription : Inscription={
      Username:this.user.username,
      Id: id
    };

    this.api.deleteInscription(tempInscription).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngAfterViewInit();
      }
    });
  }

  initSession(urldata){
    this.api.getProfileJson(this.user.username).subscribe(data=>{
      this.auth.initUser(data);
      this.listIdSession = [];

      this.user = this.auth.getCurrentUser();

      for(let i = 0; i < this.user.Session.length; i++){
        this.listIdSession.push(this.user.Session[i].Id);
      }
    });

    this.listSession = [];
    let tempSess : Sessions;

    this.listPerson = [];
    let tempPers : Person;

    this.data = JSON.parse(JSON.stringify(urldata));

      for(let i = 0; i < this.data.length; i++){
        tempSess={
          Date: new Date(this.data[i]["Date"].split(' ')[0]).toDateString(),
          Time:this.data[i]["time"].split(' ')[1],
          Bike:this.data[i]["bike"],
          Cancel:this.data[i]["Cancel"],
          Id:this.data[i]["id"],
        };

        tempPers={
          user : this.data[i]["idInscription"]
        };

        this.listSession.push(tempSess);
        this.listPerson.push(tempPers);
      }
    this.dataSource = new MatTableDataSource(this.listSession);
    this.dataSource.sort = this.sort;
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(ListPersonDialog, {
      width: '250px',
      data: this.listPerson[id].user
    });
  }

  getYear(){
    var today = new Date();
    for(var i = (this.year); i <= (this.year+10); i++){
      this.listYear.push(i);}
  }
}
