import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {ApiService} from "../api.service";
import {MatSelect} from "@angular/material/select";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

let viewChild: any;
// @ts-ignore
viewChild = ViewChild("matSelect");

let viewChild2: any;
// @ts-ignore
viewChild2 = ViewChild("matSelect2");

export interface Sessions {
  Date : string,
  Time : string,
  Bike : number,
  Cancel : boolean,
  Id : number,
  // Subs : Person
}

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

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})


export class MonthComponent implements OnInit {
  private data: JSON[]=[];
  private value : number = null;
  private listSession : Sessions[]=[];
  private listPerson : Person[]=[];
  private year: number;
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
  private listYear: number[]=[];


  constructor(private api: ApiService, public dialog: MatDialog) { }

  @viewChild matSelect: MatSelect;
  @viewChild2 matSelect2: MatSelect;


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
      console.log(this.year);
      this.api.getMonthJson(this.value,this.year.toString()).subscribe(urldata => {
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

      this.listPerson = [];
      let tempPers : Person;


      this.data = JSON.parse(JSON.stringify(urldata));

      for(let i = 0; i < this.data.length; i++){
        tempSess={
          Date:this.data[i]["Date"].split(' ')[0],
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
    console.log(this.listSession)
  }

  openDialog(id): void {
    console.log(this.listPerson[id]);

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
