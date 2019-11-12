import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {AuthService} from "../auth.service";
import {CookieService} from "ngx-cookie-service";

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
  private user : any;

  constructor(private api: ApiService,
              private auth:AuthService,
              private cookie: CookieService) { }

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
    this.user = this.auth.getCurrentUser();
    console.log(this.cookie.get('username-localhost-8888'))
  }

}
