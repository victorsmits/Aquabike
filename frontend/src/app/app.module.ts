import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ListPersonDialog, MonthComponent} from './month/month.component';
import {AuthService} from "./auth.service";
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import { MatDialogModule } from '@angular/material';
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonthComponent,
    LoginComponent,
    ListPersonDialog,
    SignupComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatRippleModule,
        MatListModule,
        MatDialogModule,
        NoopAnimationsModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
  entryComponents: [
    MonthComponent,
    ListPersonDialog
  ],
  providers: [AuthService,
    ApiService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    MatDatepickerModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
