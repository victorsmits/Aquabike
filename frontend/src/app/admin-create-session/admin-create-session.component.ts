import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {Sessions, TypeSession} from '../Interface/Interface.module';
import {ApiService} from "../service/api.service";
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ToolService} from '../service/tool.service';

//todo display create error


@Component({
  selector: 'confirm-generation',
  templateUrl: './confirm-generation.component.html',
})
export class ConfimGenerationComponent implements OnInit{
  public error : string;
  public isLoading: boolean = false;
  listTypeSession: TypeSession[]=[];
  private listTypeSessionId: number[]=[];

  constructor(
    public dialogRef: MatDialogRef<ConfimGenerationComponent>,
    public api : ApiService,
    public tool : ToolService,
    public router : Router) {
  }

  ngOnInit(): void {
    this.api.getTypeSession().subscribe(urldata=>{
      let data = JSON.parse(JSON.stringify(urldata));
      this.listTypeSession = [];
      for(let type of data){
        this.listTypeSession .push({
          Id : type["id"],
          Day : this.tool.daySwith(type["Day"]),
          Time : type["Time"].split(' ')[1]
        });
      }
    })
  }

  addTypeSession(Id: number) {
    if (this.listTypeSessionId.indexOf(Id) != -1){
      this.listTypeSessionId.splice(this.listTypeSessionId.indexOf(Id),1);
    }else{
      this.listTypeSessionId.push(Id);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  generateSession(form : NgForm){
    this.isLoading = true;
    this.api.postGenerateSessionAuto(form.value.year,this.listTypeSessionId,9).subscribe(urldata=>{
      if(urldata['result']){
        this.dialogRef.close();
      }
    },error =>{
      this.error = error
    } );
  }
}

@Component({
  selector: 'app-admin-create-session',
  templateUrl: './admin-create-session.component.html',
  styleUrls: ['./admin-create-session.component.css']
})
export class AdminCreateSessionComponent implements OnInit {
  public error: any;

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff'
    }
  };

  constructor(private api: ApiService,
              private router : Router,
              private dialog : MatDialog) { }

  ngOnInit() {
    // this.generateSession(5);
  }

  onCreate(form: NgForm) {
    let d = new Date(form.value.date);
    let newSess : Sessions ={
      Date : d.toDateString(),
      Time : form.value.time,
      Bike : form.value.bike,
      Cancel : false,
      Id : 0
    };

    this.api.createNewSess(newSess).subscribe(urldata=>{
      if(urldata['result']){
        this.router.navigate(['admin/session'])
      }
    },error =>{
      this.error = error
    } );
  }

  //todo pop up to confirm 5 years generation

  openDialog(){
    const dialogRef = this.dialog.open(ConfimGenerationComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("close");
      this.ngOnInit();
    });
  }

}
