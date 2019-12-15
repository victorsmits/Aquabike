import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../service/api.service';
import {ToolService} from '../service/tool.service';
import { TypeSession} from '../Interface/Interface.module';
import { MatDialog} from '@angular/material';
import {AddTypeSessionComponent} from './add-type-session.component';
import {EditTypeSessionComponent} from './edit-type-session.component';
import {listAboSession} from './list-abo-session.component';


@Component({
  selector: 'app-type-session',
  templateUrl: './type-session.component.html',
  styleUrls: ['./type-session.component.css']
})
export class TypeSessionComponent implements OnInit, AfterViewInit {
  public listTypeSession: TypeSession[] = [];
  displayedColumns: string[] = ['Day','Time','Action','Add'];
  error: any;
  isLoading: boolean = true;

  constructor(private api : ApiService,
              private tool : ToolService,
              private dialog : MatDialog) { }

  ngOnInit() {
    this.listTypeSession = [];
    this.api.getTypeSession().subscribe(urldata=>{
      let str = JSON.stringify(urldata);
      str = str.replace(/"day"/gi, "\"Day\"");
      str = str.replace(/"time"/gi, "\"Time\"");
      str = str.replace(/"idTypeSession"/gi, "\"idPerson\"");
      let data = JSON.parse(str);

      this.listTypeSession = this.tool.initTypeSession(data);
      this.isLoading = false
    })
  }

  ngAfterViewInit(){
    this.listTypeSession = [];
    this.api.getTypeSession().subscribe(urldata=>{

      let str = JSON.stringify(urldata);
      str = str.replace(/"day"/gi, "\"Day\"");
      str = str.replace(/"time"/gi, "\"Time\"");
      str = str.replace(/"idTypeSession"/gi, "\"idPerson\"");
      let data = JSON.parse(str);

      this.listTypeSession = this.tool.initTypeSession(data);
      this.isLoading = false
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddTypeSessionComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openEditDialog(Id : number){
    const dialogRef = this.dialog.open(EditTypeSessionComponent, {
      width : '250px',
      data : this.listTypeSession[Id]
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openListDialog(Id: any) {
    const dialogRef = this.dialog.open(listAboSession, {
      width : '250px',
      data : this.listTypeSession[Id].Person
    });
  }

  Delete(Id: any) {
    this.api.delTypeSession(Id).subscribe(result=>{
      if(result['result']){
        this.ngOnInit();
      }
    })
  }
}
