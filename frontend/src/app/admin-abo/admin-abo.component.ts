import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {User} from "../Interface/Interface.module";

interface Person extends User {
  AboType : number;
}

@Component({
  selector: 'app-admin-abo',
  templateUrl: './admin-abo.component.html',
  styleUrls: ['./admin-abo.component.css']
})
export class AdminAboComponent implements OnInit {
  private data: JSON[]=[];
  private listUser: Person[];
  displayedColumns: string[] = ['LastName', 'FirstName', 'Abonnement', 'AboType','ReSubscribe'];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getAboJson().subscribe(urldata=>{
      this.initData(urldata)
    })
  }

  private initData(urldata: Object) {
    this.data = JSON.parse(JSON.stringify(urldata));

    this.listUser = [];

    for(let i = 0; i < this.data.length; i++){
      let j;
      switch (this.data[i]["Day"]) {
        case 'Mon' : {j = 'Lundi'; break;}
        case 'Tue' : {j = 'Mardi'; break;}
        case 'Wed' : {j = 'Mercredi'; break;}
        case 'Thu' : {j = 'Jeudi'; break;}
        case 'Fry' : {j = 'Vendredi'; break;}
        case 'Sat' : {j = 'Samedi'; break;}
        case 'Sun' : {j = 'Dimanche'; break;}
      }

      this.listUser.push({
        id: this.data[i]["id"],
        lastName: this.data[i]["LastName"],
        firstName: this.data[i]["FirstName"],
        abonnement: this.data[i]["Abonnement"],
        Day: j,
        Email: this.data[i]["Email"],
        Session: [],
        Role: this.data[i]["roles"],
        AboType: this.data[i]["AboType"]
      });
    }
  }

  reSubcribe(id: any) {
    this.api.postAboRenew(id).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngOnInit();
      }
    });
  }
}
