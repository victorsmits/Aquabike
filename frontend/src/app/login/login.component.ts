import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
import {ToolService} from '../service/tool.service';
import {EditProfileComponent} from '../profile/profile.component';
import {editProfileInterface, TypeSession, User} from '../Interface/Interface.module';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ApiService} from '../service/api.service';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'edit-profile',
  templateUrl: './reset-pwd.component.html',
})
export class ResetPwdComponent implements OnInit{
  Error: any;
  isLoading:boolean;

  constructor(
    public dialogRef: MatDialogRef<ResetPwdComponent>,
    private api : ApiService,
    private tool : ToolService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  reset(resetpwd: NgForm) {
    this.isLoading=true;
    this.api.sendResetPwd(resetpwd.value.Email).subscribe(url=>{
      if(url["result"]){
        this.dialogRef.close();
      }
    },error=>{
      this.Error = error;
      this.isLoading = false;
    })
  }
}

@Component({
  selector: 'app-login', // --> can be ommited because of the routes
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{

  isLoading = false;
  public Error: any;
  public isHandset$ = this.tool.isHandset$;

  constructor(public authService: AuthService,
              public router : Router,
              private tool : ToolService,
              public dialog: MatDialog,) { }

  ngOnInit(){}

  ngAfterViewInit(): void {
    this.authService.getAuthStatusListener()
    .subscribe(
      auth => {
        if(auth){
          this.router.navigate([''])
        }
        this.authService.getErrorListener().subscribe(next=>{
          this.Error = next;
          this.isLoading = true;
        },error => {
          this.Error = error;
        });
      }
    );
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.loginUser(form.value.username, form.value.password);
    this.ngAfterViewInit();
  }

  openResetPwd(){
    const dialogRef = this.dialog.open(ResetPwdComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      this.tool.openSnackBar("Lien de récupération envoyé, vérifier vos spam!","",5000)
    });
  }
}
