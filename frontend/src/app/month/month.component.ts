import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {ApiService} from "../service/api.service";
import {AuthService} from "../service/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Inscription, Sessions, User} from "../Interface/Interface.module";

import {MatSelect} from "@angular/material/select";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ToolService} from '../service/tool.service';

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
//todo block unsub if today

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})

export class MonthComponent implements OnInit, AfterViewInit {
  public data: JSON[]=[];
  public value : number = null;
  public listSession : Sessions[]=[];
  public dataSource: MatTableDataSource<Sessions>;
  public listPerson : Person[]=[];
  public listYear: number[]=[];
  public year: number;
  public user: User;
  public listIdSession: number[]=[];
  public today: Date;

  @ViewChild('matSelect',{static:false})matSelect : MatSelect;
  @ViewChild('matSelect2',{static:false})matSelect2 : MatSelect;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
              private tool : ToolService) {
    this.user = this.auth.getCurrentUser();

  }

//todo: test block sub when no more abonnement left or when session is full

  ngOnInit() {
    this.today = new Date();
    this.value = this.today.getMonth()+1;
    this.year = this.today.getFullYear();

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

  subscribe(Id: number) {
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

  unSubscribe(id: number) {
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
      let d = new Date(this.data[i]["Date"].split(' ')[0]);
      tempSess={
        Date: this.tool.switchDate(d),
        Time: this.data[i]["time"].split(' ')[1],
        Bike: this.data[i]["bike"],
        Cancel: this.data[i]["Cancel"],
        Id: this.data[i]["id"],
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

  checkIfDisable(element) : boolean{
    return element.Cancel || element.Bike == 0 || (this.user.abonnement == 0 && !this.checkIfSub(element))
      || (element.Date === this.today.toDateString() && this.checkIfSub(element))
  }

  checkIfSub(element) : boolean{
    return this.listIdSession.includes(element.Id)
  }
}
