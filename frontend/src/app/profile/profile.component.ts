import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSelect} from "@angular/material/select";
import {Inscription, Sessions, User} from "../Interface/Interface.module";
import {AuthService} from "../auth.service";
import {MonthComponent} from "../month/month.component";

let viewChild: any;
// @ts-ignore
viewChild = ViewChild("matSelect");

//todo display unsub error

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
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
  constructor(private api: ApiService,
              private auth:AuthService){}

  @viewChild matSelect: MatSelect;

  ngOnInit() {
    let m = new Date();
    this.year = m.getFullYear();
    this.getYear();
    this.User = this.auth.getCurrentUser();

    this.api.getProfileJson(this.User.username).subscribe(data=>{
      this.auth.initUser(data);
      this.User = this.auth.getCurrentUser();

      for(let i = 0; i < this.User.Session.length; i++) {
        let tempSess:Sessions;
        let d = new Date(this.User.Session[i]["Date"]);
        if(d.getFullYear() === this.year){
          tempSess ={
            Date:  this.User.Session[i]["Date"],
            Time: this.User.Session[i]["Time"],
            Bike: this.User.Session[i]["Bike"],
            Cancel: this.User.Session[i]["Cancel"],
            Id: this.User.Session[i]["Id"]
          };
          this.listSession.push(tempSess);
        }
      }
    });
  }

  getYear(){
    var today = new Date();
    for(var i = (this.year); i <= (this.year+10); i++){
      this.listYear.push(i);}
  }

  unSubscribe(Id: number) {
    let tempInscription : Inscription={
      Username:this.User.username,
      Id: Id
    };

    this.api.deleteInscription(tempInscription).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngOnInit();
      }
    });
  }
}
