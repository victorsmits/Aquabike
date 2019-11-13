import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSelect} from "@angular/material/select";
import {Sessions,User} from "../Interface/Interface.module";
import {AuthService} from "../auth.service";

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
  private cookieSession: Sessions[];

  constructor(private api: ApiService, private auth:AuthService){}

  @viewChild matSelect: MatSelect;

  ngOnInit() {
    //todo get username from login
    let m = new Date();
    this.year = m.getFullYear();
    this.getYear();

    this.User = JSON.parse(this.auth.getCurrentUser());
    this.cookieSession = JSON.parse(this.auth.getCurrentUserSession());
    console.log(this.cookieSession);
    let tempSess: Sessions;
    console.log(this.User);
    // this.User.Session = [];

    for(let i = 0; i < this.cookieSession.length; i++) {
      let d = new Date(this.cookieSession[i]["date"]);
      if(d.getFullYear() === this.year){
        tempSess ={
          Date:  this.cookieSession[i]["date"],
          Time: this.cookieSession[i]["time"],
          Bike: this.cookieSession[i]["bike"],
          Cancel: this.cookieSession[i]["Cancel"],
          Id: this.cookieSession[i]["id"]
        };
        this.User.Session.push(tempSess);
      }
    }
    console.log(this.User);
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
