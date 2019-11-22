import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../service/api.service";
import {editAbo, User} from '../Interface/Interface.module';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ToolService} from '../service/tool.service';

interface Person extends User {
  AboType : number;
}

class DialogData {
}

@Component({
  selector: 'edit-abo-type',
  templateUrl: './edit-abo-type.component.html',
})
export class ShowEditAboType {

  constructor(
    public dialogRef: MatDialogRef<ShowEditAboType>,
    @Inject(MAT_DIALOG_DATA) public data: editAbo) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//todo display renew + edit error

@Component({
  selector: 'app-admin-abo',
  templateUrl: './admin-abo.component.html',
  styleUrls: ['./admin-abo.component.css']
})
export class AdminAboComponent implements OnInit {
  public data: JSON[]=[];
  public listUser: Person[]=[];
  displayedColumns: string[] = ['LastName', 'FirstName', 'Abonnement', 'AboType','Day','ReSubscribe'];
  public dataSource: MatTableDataSource<Person>;

  constructor(private api:ApiService,
              public dialog: MatDialog,
              private tool : ToolService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.api.getAboJson().subscribe(urldata=>{
      this.initData(urldata)
    })
  }

  initData(urldata: Object) {
    this.data = JSON.parse(JSON.stringify(urldata));

    this.listUser = [];

    for(let i = 0; i < this.data.length; i++){
      this.listUser.push({
        id: this.data[i]["id"],
        username : this.data[i]["Username"],
        lastName: this.data[i]["LastName"],
        firstName: this.data[i]["FirstName"],
        abonnement: this.data[i]["Abonnement"],
        Day: this.tool.daySwith(this.data[i]["Day"]),
        Time: this.data[i]["Time"],
        Day2: this.tool.daySwith(this.data[i]["Day2"]),
        Time2: this.data[i]["Time"],
        Email: this.data[i]["Email"],
        Session: [],
        Role: this.data[i]["roles"],
        AboType: this.data[i]["AboType"]
      });
    }

    this.dataSource = new MatTableDataSource(this.listUser);
    this.dataSource.sort = this.sort;
  }



  reSubcribe(id: any) {
    this.api.postAboRenew(id).subscribe(urldata=>{
      if(urldata["result"]){
        this.ngOnInit();
      }
    });
  }

  openDialog(fname,lname,id,aboType): void {
    let newAboType: editAbo={
      FirstName: fname,
      LastName: lname,
      Id:id,
      aboType:aboType,
    };

    const dialogRef = this.dialog.open(ShowEditAboType, {
      width: '250px',
      data: newAboType
    });

    dialogRef.afterClosed().subscribe(result => {
      newAboType.aboType = result;
      this.api.editAboType(newAboType).subscribe(urldata=>{
        if(urldata["result"]){
          this.ngOnInit();
        }
      });
    });
  }
}
