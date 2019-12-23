import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApiService} from '../service/api.service';
import {ToolService} from '../service/tool.service';
import {NgForm} from '@angular/forms';
import {TypeSession, User} from '../Interface/Interface.module';

@Component({
  selector: 'del-abo',
  templateUrl: './del-type-session.component.html',
})
export class DelTypeSessionComponent implements OnInit{
  public error : string;

  constructor(
    public dialogRef: MatDialogRef<DelTypeSessionComponent>,
    public api : ApiService,
    @Inject(MAT_DIALOG_DATA) public data: TypeSession,) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Delete(Id: any) {
    this.api.delTypeSession(Id).subscribe(result=>{
      if(result['result']){
        this.ngOnInit();
      }
    })
  }
}
