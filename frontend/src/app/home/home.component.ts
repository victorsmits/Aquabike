import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  private data: JSON;
  private user: JSON[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getHomeJson().subscribe(urldata => {
      this.data = JSON.parse(JSON.stringify(urldata));
      console.log(this.data);
      let inscription = this.data[0]["idInscription"];
      for (let i = 0; i < inscription.length; i++){
        this.user.push(inscription[i]["idPerson"]);
      }
      console.log(this.user)
    });

    this.api.getMonthJson(10).subscribe(urldata =>
      console.log(urldata)
    );

    this.api.getMonthJson(11).subscribe(urldata =>
      console.log(urldata)
    )

  }

}
