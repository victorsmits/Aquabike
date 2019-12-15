import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ApiService} from '../service/api.service';
import {ToolService} from '../service/tool.service';
import {NgForm} from '@angular/forms';
import {TypeSession, User} from '../Interface/Interface.module';

@Component({
  selector: 'edit-type-session',
  templateUrl: './edit-type-session.component.html',
})
export class EditTypeSessionComponent implements OnInit{
  public days = this.tool.days;
  public error : string;

  @ViewChild('daySelect',{static:false}) daySelect: MatSelect;
  public selectDay: any;

  constructor(
    public dialogRef: MatDialogRef<EditTypeSessionComponent>,
    public api : ApiService,
    public tool : ToolService,
    @Inject(MAT_DIALOG_DATA) public data: TypeSession,) {
  }

  ngOnInit(): void {
    this.selectDay = this.tool.invDaySwitch(this.data.Day)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Edit(form : NgForm) {
    let tempTypeSess : TypeSession = {
      Id : this.data.Id,
      Day : this.daySelect.value,
      Time : form.value.stime
    };

    console.log(tempTypeSess);

    this.api.editTypeSession(tempTypeSess).subscribe(result=>{
      if(result['result']){
        console.log(result['result']);
        this.dialogRef.close();
      }
    },error => {
      this.error = error;
    })
  }
}
