import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MatDialogRef} from '@angular/material';
import {ApiService} from '../service/api.service';
import {ToolService} from '../service/tool.service';
import {NgForm} from '@angular/forms';
import {TypeSession} from '../Interface/Interface.module';

@Component({
  selector: 'add-type-session',
  templateUrl: './add-type-session.component.html',
})
export class AddTypeSessionComponent implements OnInit{
  public days = this.tool.days;
  public error : string;

  @ViewChild('daySelect',{static:false}) daySelect: MatSelect;

  constructor(
    public dialogRef: MatDialogRef<AddTypeSessionComponent>,
    private api : ApiService,
    private tool : ToolService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Add(form : NgForm) {
    let tempTypeSess : TypeSession = {
      Id : 0,
      Day : this.daySelect.value,
      Time : form.value.stime
    };

    this.api.addTypeSession(tempTypeSess).subscribe(result=>{
      if(result['result']){
        console.log(result['result']);
        this.dialogRef.close();
      }
    },error => {
      this.error = error;
    })
  }
}
