import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApiService} from '../service/api.service';
import {ToolService} from '../service/tool.service';
import {NgForm} from '@angular/forms';
import {TypeSession, User} from '../Interface/Interface.module';

@Component({
  selector: 'del-abo',
  templateUrl: './del-abo.component.html',
})
export class DelAboComponent implements OnInit{
  private error : string;

  constructor(
    public dialogRef: MatDialogRef<DelAboComponent>,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public data: User,) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Delete(id: any) {
    this.api.postDelUser(id).subscribe(urldata=>{
      if(urldata["result"]){
        this.dialogRef.close();
      }
    },error => {
      this.error = error;
    })
  }
}
