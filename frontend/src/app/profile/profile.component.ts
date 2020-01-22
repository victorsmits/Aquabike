import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../service/api.service";
import {MatSelect} from "@angular/material/select";
import {editProfileInterface, Inscription, Sessions, TypeSession, User} from '../Interface/Interface.module';
import {AuthService} from "../service/auth.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ToolService} from '../service/tool.service';

//todo display unsub error
//todo display type abo

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit{
  public days = this.tool.days;
  public day;
  public error : string;
  public listTypeSession: TypeSession[];

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
      let data = JSON.stringify(urldata);
      data = data.replace(/"idTypeSession"/gi, "\"idPerson\"");
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
    if(this.data.typeSessions.indexOf(type) == -1){
      console.log('add '+ type);
      this.data.typeSessions.push(type);
      console.log('del '+ type.Day + type.Time);
    }else{
      this.data.typeSessions.splice(this.data.typeSessions.indexOf(type),1);
      console.log('del '+ type.Day + type.Time);
    }
  }

  checkSession(session: TypeSession) {
    let state;
    let i =0;
    for(let type of this.data.typeSessions){
      i ++;
      session.Id == type.Id ? state = true : state = false;
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
  public today: Date;

  @ViewChild('matSelect',{static:false})matSelect : MatSelect;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
  isLoading: boolean = true;
  public dataSource: MatTableDataSource<Sessions>;


  constructor(private api: ApiService,
              private auth:AuthService,
              public dialog: MatDialog,
              private tool: ToolService){}

  ngOnInit() {
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.getYear();
    this.User = this.auth.getCurrentUser();

    this.api.getProfileJson(this.User.username).subscribe(data=>{
      this.auth.initUser(data);
      this.User = this.auth.getCurrentUser();
      let sess : Sessions[] = this.User.Session;
      for(let i = 0;i < this.User.Session.length;i++){
        if(this.tool.checkIfBeforeToday(sess[i].Date)){
          this.listSession.push(sess[i])
        }
      }
      this.dataSource = new MatTableDataSource(this.listSession);
      this.dataSource.paginator = this.paginator;
      this['isLoading'] = false
    });
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

    this.api.delInscription(tempInscription).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngOnInit();
      }
    });
  }

  checkIfDisable(element) : boolean{
    return (element.Date === this.tool.switchProfileDate(this.today))
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

  switchDate(Date) {
    return this.tool.switchProfileDate(Date)
  }
}
