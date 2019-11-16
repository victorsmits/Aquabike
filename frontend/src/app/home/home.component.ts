import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  private data: JSON[]=[];
  private listUser: any[] = [];
  private date;
  private time : any[]= [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    let day = new Date();
    this.date = day.toDateString();
    this.api.getHomeJson().subscribe(urldata => {
      this.data = JSON.parse(JSON.stringify(urldata));

      for (let j = 0; j < this.data.length; j++) {
        let hour = this.data[j]["time"].split(' ')[1];
        this.time.push(hour);
        let inscription = this.data[j]["idInscription"];
        let user: JSON[] = [];
        for (let i = 0; i < inscription.length; i++) {
          user.push(
            inscription[i]["idPerson"]
          )
        }
        this.listUser.push(user)
      }
    });



  }

}
