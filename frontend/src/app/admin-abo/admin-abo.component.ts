import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../service/api.service";
import {editAbo, Payment, User} from '../Interface/Interface.module';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatInput, MatSelect, MatSnackBar} from '@angular/material';
import {ToolService} from '../service/tool.service';
import {DelAboComponent} from './del-abo.component';
import {NgForm} from '@angular/forms';

export interface Person extends User {
  AboType : number;
  Payments? : Payment
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
@Component({
  selector: 'edit-abo-type',
  templateUrl: './payment-abo.component.html',
  styleUrls: ['./admin-abo.component.css']
})
export class PaymentDialog {
  public error : string;
  constructor(
    public dialogRef: MatDialogRef<PaymentDialog>,
    @Inject(MAT_DIALOG_DATA) public element: Payment,
    private api : ApiService) {}

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
export class AdminAboComponent implements OnInit,AfterViewInit {
  public error : string;
  public Error: string;
  public data: JSON[] = [];
  public listUser: Person[] = [];
  displayedColumns: string[] = ['LastName', 'FirstName', 'Abonnement', 'AboType', 'Action','amount'];
  public dataSource: MatTableDataSource<Person>;
  private pay : Payment = {
    amount : 0,
    type : null,
  } ;

  constructor(private api: ApiService,
              public dialog: MatDialog,
              private tool: ToolService,
              private _snackBar: MatSnackBar) {
  }

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  isLoading: boolean = true;

  ngOnInit() {
    this.api.getAboJson().subscribe(urldata => {
      this.initData(urldata);
      console.log(this.listUser);
    });
  }

  ngAfterViewInit(): void {
  }

  initData(urldata: Object) {
    let str = JSON.stringify(urldata);
    str = str.replace(/"day"/gi, "\"Day\"");
    str = str.replace(/"time"/gi, "\"Time\"");
    this.data = JSON.parse(str);

    this.listUser = [];

    for (let i = 0; i < this.data.length; i++) {
      this.listUser.push({
        id: this.data[i]["id"],
        username: this.data[i]["Username"],
        lastName: this.data[i]["LastName"],
        firstName: this.data[i]["FirstName"],
        abonnement: this.data[i]["AboType"]  === 999999 ? "Sans abonnement" : this.data[i]["Abonnement"],
        typeSessions: this.data[i]["IdTypeSession"].length > 0 ? this.tool.initTypeSession(JSON.stringify(this.data[i]["IdTypeSession"])) : [],
        Email: this.data[i]["Email"],
        Session: [],
        Role: this.data[i]["roles"],
        AboType: this.data[i]["AboType"] === 999999 ? "Sans abonnement" : this.data[i]["AboType"],
        Payments: this.data[i]["payements"].length > 0 ? this.tool.initPayment(this.data[i]["payements"]): this.pay
      });
    }

    this.dataSource = new MatTableDataSource(this.listUser);
    this.dataSource.sort = this.sort;
    this.isLoading = false
  }

  reSubcribe(user : User) {
    this.api.postAboRenew(user.id).subscribe(urldata => {
      if (urldata["result"]) {
        this.ngOnInit();
        let action = user.firstName + " " + user.lastName;
        this.tool.openSnackBar("Abonnement actualiser pour", action)
      }
    });
  }

  openDialog(fname, lname, id, aboType): void {
    let newAboType: editAbo = {
      FirstName: fname,
      LastName: lname,
      Id: id,
      aboType: aboType,
    };

    const dialogRef = this.dialog.open(ShowEditAboType, {
      width: '250px',
      data: newAboType
    });

    dialogRef.afterClosed().subscribe(result => {
      newAboType.aboType = result;
      this.api.editAboType(newAboType).subscribe(urldata => {
        if (urldata["result"]) {
          this.ngOnInit();
          this.tool.openSnackBar("Modification du nombre de scéance total éffectuée","")
        }
      });
    });
  }

  openDeleteDialog(user: User) {
    const dialogRef = this.dialog.open(DelAboComponent, {
      width: '550px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      this.tool.openSnackBar("Suppression de",user.lastName + user.firstName)
    });
  }

  openPay(element: Person) {
    let temppay : Payment = {
      person_id : element.id,
      amount : 0,
      type : null
    };
    const dialogRef = this.dialog.open(PaymentDialog, {
      width: '250px',
      data: temppay
    });

    dialogRef.afterClosed().subscribe((result:Payment) => {
      if (result) {
        temppay.amount = result.amount;
        temppay.type = result.type;
        console.log(result);
        this.api.addPayment(result).subscribe(urldata =>{
          if(urldata["result"]){
            this.ngOnInit();
            this.tool.openSnackBar("Payment éffectué!","")
          }
        }, error => {
          this.error = error
        });

      }

    });
  }
}
