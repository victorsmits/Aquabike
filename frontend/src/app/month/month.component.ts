import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../service/api.service';
import {AuthService} from '../service/auth.service';
import {Inscription, Sessions, User} from '../Interface/Interface.module';

import {MatSelect} from '@angular/material/select';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ToolService} from '../service/tool.service';

@Component({
  selector: 'list-person-detail',
  templateUrl: './list-person-detail.component.html',
})
export class ListPersonDialog {
  PersonCol: string[] = ['User'];
  constructor(
    public dialogRef: MatDialogRef<ListPersonDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User[]) {}

    onNoClick(): void {
    this.dialogRef.close();
  }

}

//todo display month selection + year selection error
//todo display sub + unsub error
//todo block unsub if today

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})

export class MonthComponent implements OnInit, AfterViewInit {
  public data: JSON[]=[];
  public value : number = null;
  public listSession : Sessions[];
  public dataSource: MatTableDataSource<Sessions>;
  public listPerson : User[];
  public listYear: number[]=[];
  public year: number;
  public user: User;
  public listIdSession: number[]=[];
  public today: Date = new Date();
  public isLoading: boolean = true;
  public isHandset$ = this.tool.isHandset$;

  @ViewChild('matSelect',{static:false})matSelect : MatSelect;
  @ViewChild('matSelect2',{static:false})matSelect2 : MatSelect;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] ;


  months = [
    {name : "janvier", num : 1},
    {name : "février", num : 2},
    {name : "mars", num : 3},
    {name : "avril", num : 4},
    {name : "mai", num : 5},
    {name : "juin", num : 6},
    {name : "juillet", num : 7},
    {name : "août", num : 8},
    {name : "septembre", num : 9},
    {name : "octobre", num : 10},
    {name : "novembre", num : 11},
    {name : "décembre", num : 12},
  ];



  constructor(private api: ApiService,
              public dialog: MatDialog,
              private auth:AuthService,
              private tool : ToolService) {
    this.user = this.auth.getCurrentUser();
    this.today = new Date();
    this.value = this.today.getMonth()+1;
    this.year = this.today.getFullYear();
    this.getYear();
  }

  ngOnInit() {
    this.isHandset$.subscribe(value1 =>
      !value1 ? this.displayedColumns = ['Date', 'Time', 'Bike', 'Status','Info','Action'] : this.displayedColumns = ['Date', 'Time','Action'] ) ;
    this.api.getMonthJson(this.value,this.year.toString()).subscribe(urldata => {
      this.initSession(urldata);
    });

  }

  ngAfterViewInit(){

    this.matSelect.valueChange.subscribe(value => {
      this.value = value;
      this.api.getMonthJson(value,this.year.toString()).subscribe(urldata => {
        this.initSession(urldata);
      });
    });

    this.matSelect2.valueChange.subscribe(value => {
      this.year = value;
      this.api.getMonthJson(this.value,this.year.toString()).subscribe(urldata => {
        this.initSession(urldata);
      });
    });
  }

  subscribe(session : Sessions) {
    let tempInscription : Inscription={
      Username:this.user.username,
      Id: session.Id
    };

    this.api.createInscription(tempInscription).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngOnInit();
        this.tool.openSnackBar("Vous vous êtes inscrit(e) le",session.Date)
      }
    });
  }

  unSubscribe(session:Sessions) {
    let tempInscription : Inscription={
      Username:this.user.username,
      Id: session.Id
    };

    this.api.delInscription(tempInscription).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngOnInit();
        this.tool.openSnackBar("Vous vous êtes désinscrit(e) du",session.Date)
      }
    });
  }

  initSession(urldata){
    this.api.getProfileJson(this.user.username).subscribe(data=>{
      this.auth.initUser(data);
      this.listIdSession = [];
      this.user = this.auth.getCurrentUser();

      for(let i = 0; i < this.user.Session.length; i++){
        this.listIdSession.push(this.user.Session[i].Id);
      }
    });

    this.listSession = [];

    this.listPerson = [];

    this.data = JSON.parse(JSON.stringify(urldata));

    for(let i = 0; i < this.data.length; i++){
      if(this.tool.checkIfBeforeToday(this.data[i]["Date"])){
        let tempSess = this.tool.initTempSess(this.data[i],this.data[i]["Date"]);

        tempSess.Date = this.tool.switchDate(new Date(tempSess.Date));
        tempSess.Person = this.tool.initListPersDetail(this.data[i]["idInscription"]);
        this.listSession.push(tempSess);
      }
    }

    this.dataSource = new MatTableDataSource(this.listSession);
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  }

  openDialog(Session : Sessions): void {
    const dialogRef = this.dialog.open(ListPersonDialog, {
      width: '250px',
      data: Session.Person
    });
  }

  getYear(){
    var today = new Date();
    for(var i = (this.year); i <= (this.year+10); i++){
      this.listYear.push(i);}
  }



  checkIfDisable(element) : boolean{
    return element.Cancel || element.Bike == 0 || (this.user.abonnement == 0 && !this.checkIfSub(element))
  }

  checkIfSub(element) : boolean{
    return this.listIdSession.includes(element.Id)
  }
}
