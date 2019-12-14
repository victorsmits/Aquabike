import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../service/api.service";
import {MatSelect} from "@angular/material/select";
import {editProfileInterface, Inscription, Sessions, TypeSession, User} from '../Interface/Interface.module';
import {AuthService} from "../service/auth.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ToolService} from '../service/tool.service';

//todo display unsub error
//todo display type abo

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit{
  private days = this.tool.days;
  private day;
  private day2;
  private time2;
  private error : string;
  private listTypeSessionId: number[] = [];
  private listTypeSession: TypeSession[];

  constructor(
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private api : ApiService,
    private tool : ToolService) {
  }

  @ViewChild('daySelect',{static:false}) daySelect: MatSelect;
  @ViewChild('daySelect2',{static:false}) daySelect2: MatSelect;
  @ViewChild('timeSelect',{static:false}) timeSelect: MatSelect;
  @ViewChild('timeSelect2',{static:false}) timeSelect2: MatSelect;

  ngOnInit(): void {
    this.api.getTypeSession().subscribe(urldata=>{
      let data = JSON.parse(JSON.stringify(urldata));
      this.listTypeSession = this.tool.initTypeSession(data);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  EditProfile(form : NgForm) {
    let editProfile : editProfileInterface = {
      id : this.data.id,
      lastName : form.value.lastName,
      firstName : form.value.firstName,
      Email : form.value.Email,
      password : form.value.password ? form.value.password : null,
      typeSessions : this.data.typeSessions
    };

    console.log(editProfile);

    this.api.postEditProfile(editProfile).subscribe(result =>{
      if(result){
        this.dialogRef.close();
      }
    },error => {
      this.error = error;
    })
  }

  EditTypeSession(type : TypeSession) {
    if(this.checkSession(type) == null){
      console.log('add '+ type);
      this.data.typeSessions.push(type);
    }else{
      console.log('del '+ type);

      this.data.typeSessions.splice(this.checkSession(type),1)
    }
  }

  checkSession(session: TypeSession) {
    let state;
    let i =0;
    for(let type of this.data.typeSessions){
      i ++;
      session.Id == type.Id ? state = i : state = null;
    }
    return state
  }

}

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
              private auth:AuthService,
              public dialog: MatDialog,){}

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
    let date = new Date(d);
    let j;
    switch (date.getDay()) {
      case 1:{j = "Lundi "; break}
      case 2:{j = "Mardi "; break}
      case 3:{j = "Mercredi "; break}
      case 4:{j = "jeudi "; break}
      case 5:{j = "Vendrdi "; break}
      case 6:{j = "Samedi "; break}
      case 7:{j = "Dimanche "; break}
    }
    let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    return j + date.getDate() + " " +  months[date.getMonth()] + " " + date.getFullYear()
  }

  getYear(){
    for(var i = (this.year); i <= (this.year+10); i++){
      this.listYear.push(i);}
  }

  unSubscribe(Id: number) {
    let tempInscription : Inscription = {
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

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '250px',
      data: this.User
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

}
