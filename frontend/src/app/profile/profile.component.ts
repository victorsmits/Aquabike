import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../service/api.service";
import {MatSelect} from "@angular/material/select";
import {Inscription, Sessions, User} from "../Interface/Interface.module";
import {AuthService} from "../service/auth.service";

//todo display unsub error

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  public User: User;
  public listSession : Sessions[]=[];
  public listYear: number[]=[];
  public year: number;
  public value: any;
  public displayedColumns: string[] = ['Date', 'Time', 'Bike', 'Status','Action'];
  private today: Date;

  @ViewChild('matSelect',{static:false})matSelect : MatSelect;

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
  ngOnInit() {
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.getYear();
    this.User = this.auth.getCurrentUser();

    this.api.getProfileJson(this.User.username).subscribe(data=>{
      this.auth.initUser(data);
      this.User = this.auth.getCurrentUser();
    });
  }

  switchDate(d) : string{
    d = new Date(d);
    let j;
    switch (d.getDay()) {
      case 1:{j = "Lundi "; break}
      case 2:{j = "Mardi "; break}
      case 3:{j = "Mercredi "; break}
      case 4:{j = "jeudi "; break}
      case 5:{j = "Vendrdi "; break}
      case 6:{j = "Samedi "; break}
      case 7:{j = "Dimanche "; break}
    }
    let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    return j + d.getDate() + " " +  months[d.getMonth()+1] + " " + d.getFullYear()
  }

  getYear(){
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

  checkIfDisable(element) : boolean{
    return (element.Date === this.today.toDateString())
  }
}
