import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSelect} from "@angular/material/select";
import {Sessions,User} from "../Interface/Interface.module";

let viewChild: any;
// @ts-ignore
viewChild = ViewChild("matSelect");



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  private data: any;
  private User: User;
  private listSession : Sessions[]=[];
  private listYear: number[]=[];
  private year: number;
  value: any;

  displayedColumns: string[] = ['Date', 'Time', 'Bike', 'Status','Action'];

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

  constructor(private api: ApiService, public dialog: MatDialog){}

  @viewChild matSelect: MatSelect;

  ngOnInit() {
    //todo get username from login
    let m = new Date();
    this.year = m.getFullYear();
    this.getYear();

    this.api.getProfileJson('victorsmits').subscribe(urldata=>{
      this.initData(urldata);
      console.log(this.User)
    });
  }

  initData(urldata){
    this.data = JSON.parse(JSON.stringify(urldata));
    let j;
    switch (this.data["Day"]) {
      case 'Mon' : {j = 'Lundi'; break;}
      case 'Tue' : {j = 'Mardi'; break;}
      case 'Wed' : {j = 'Mercredi'; break;}
      case 'Thu' : {j = 'Jeudi'; break;}
      case 'Fry' : {j = 'Vendredi'; break;}
      case 'Sat' : {j = 'Samedi'; break;}
      case 'Sun' : {j = 'Dimanche'; break;}
    }
    this.User={
      id:this.data["id"],
      lastName: this.data["LastName"],
      firstName: this.data["FirstName"],
      abonnement: this.data["Abonnement"],
      Day: j,
      Email: this.data["Email"],
      Session: this.listSession,
      Role: this.data["roles"]
    };

    let inscription = this.data["idInscription"];
    let tempSess: Sessions;

    for(let i = 0; i < inscription.length; i++) {
      let d = new Date(inscription[i]["idSession"]["date"].split(' ')[0]);
      if(d.getFullYear() === this.year){
        tempSess={
          Date:  d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(),
          Time: inscription[i]["idSession"]["time"].split(' ')[1],
          Bike: inscription[i]["idSession"]["bike"],
          Cancel: inscription[i]["idSession"]["Cancel"],
          Id: inscription[i]["idSession"]["id"]
        };
      }
      this.listSession.push(tempSess);
    }
  }

  openDialog(id): void {
    // const dialogRef = this.dialog.open(ListPersonDialog, {
    //   width: '250px',
    //   data: this.listPerson[id].user
    // });
  }

  getYear(){
    var today = new Date();
    for(var i = (this.year); i <= (this.year+10); i++){
      this.listYear.push(i);}
  }

  unSubscribe(id){

  }

}
