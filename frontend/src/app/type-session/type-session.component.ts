import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../service/api.service';
import {ToolService} from '../service/tool.service';
import { TypeSession} from '../Interface/Interface.module';
import { MatDialog} from '@angular/material';
import {AddTypeSessionComponent} from './add-type-session.component';
import {EditTypeSessionComponent} from './edit-type-session.component';


@Component({
  selector: 'app-type-session',
  templateUrl: './type-session.component.html',
  styleUrls: ['./type-session.component.css']
})
export class TypeSessionComponent implements OnInit, AfterViewInit {
  private listTypeSession: TypeSession[] = [];
  displayedColumns: string[] = ['Day','Time','Action','Add'];
  error: any;

  constructor(private api : ApiService,
              private tool : ToolService,
              private dialog : MatDialog) { }

  ngOnInit() {
    this.listTypeSession = [];
    this.api.getTypeSession().subscribe(urldata=>{
      let data = JSON.parse(JSON.stringify(urldata));
      this.listTypeSession = this.tool.initTypeSession(data);
    })
  }

  ngAfterViewInit(){
    this.listTypeSession = [];
    this.api.getTypeSession().subscribe(urldata=>{
      let data = JSON.parse(JSON.stringify(urldata));
      this.listTypeSession = this.tool.initTypeSession(data);
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddTypeSessionComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("close");
      this.ngOnInit();
    });
  }

  openEditDialog(Id : number){
    const dialogRef = this.dialog.open(EditTypeSessionComponent, {
      width : '250px',
      data : this.listTypeSession[Id]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("close");
      this.ngOnInit();
    });
  }

  Edit(Id: any) {

  }

  Delete(Id: any) {
    this.api.delTypeSession(Id).subscribe(result=>{
      if(result['result']){
        this.ngOnInit();
      }
    })
  }
}
