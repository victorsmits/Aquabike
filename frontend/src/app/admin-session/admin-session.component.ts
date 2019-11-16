import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ApiService} from "../service/api.service";
import {Sessions} from "../Interface/Interface.module";
import {ListPersonDialog} from "../month/month.component";

import {MatSelect} from "@angular/material/select";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Person  {
  user : JSON;
}

//todo add counter for bike in stock
//todo display cancel + delete + recreate error

@Component({
  selector: 'app-admin-session',
  templateUrl: './admin-session.component.html',
  styleUrls: ['./admin-session.component.css','../month/month.component.css']
})
export class AdminSessionComponent implements OnInit, AfterViewInit {
  public data: JSON[]=[];
  public value : number = null;
  public listSession : Sessions[]=[];
  public dataSource: MatTableDataSource<Sessions>;
  public listPerson : Person[]=[];
  public listYear: number[]=[];
  public year: number;
  public displayedColumns: string[] = ['Date', 'Time', 'Bike', 'Status','Info','Action'];

  @ViewChild('matSelect',{static:false})matSelect : MatSelect;
  @ViewChild('matSelect2',{static:false})matSelect2 : MatSelect;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
              public dialog: MatDialog) { }

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

  initSession(urldata){

    this.listSession = [];
    let tempSess : Sessions;

    this.listPerson = [];
    let tempPers : Person;


    this.data = JSON.parse(JSON.stringify(urldata));

    for(let i = 0; i < this.data.length; i++){
      tempSess={
        Date: new Date(this.data[i]["Date"].split(' ')[0]).toDateString(),
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
    for(var i = (this.year); i <= (this.year+10); i++){
      this.listYear.push(i);}
  }

  Replay(id: any) {
    this.api.postRenewSess(id).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngAfterViewInit();
      }
    })
  }

  Cancel(id: any) {
    this.api.postCancelSess(id).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngAfterViewInit();
      }
    })
  }

  Delete(id: any) {
    this.api.postDeleteSess(id).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngAfterViewInit();
      }
    })
  }

}
