import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../Interface/Interface.module';

@Component({
  selector: 'edit-type-session',
  templateUrl: '../month/list-person-detail.component.html',
})
export class listAboSession{
  PersonCol: string[] = ['User'];
  constructor(
    public dialogRef: MatDialogRef<listAboSession>,
    @Inject(MAT_DIALOG_DATA) public data: User[]) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
