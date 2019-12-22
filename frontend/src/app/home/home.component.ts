import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {ToolService} from '../service/tool.service';
import {Observable} from 'rxjs';
import {Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  public data: JSON[]=[];
  public listUser: any[] = [];
  public date;
  public time : any[]= [];
  public isHandset$ = this.tool.isHandset$;

  constructor(private api: ApiService,
              private tool : ToolService) { }

  ngOnInit() {
    let day = new Date();
    this.date = this.tool.switchProfileDate(day.toISOString());
    this.api.getHomeJson().subscribe(urldata => {
      this.data = JSON.parse(JSON.stringify(urldata));

      for (let j = 0; j < this.data.length; j++) {
        this.time.push(this.data[j]["time"].split(' ')[1]);

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
