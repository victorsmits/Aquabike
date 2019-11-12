import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListPersonDialog, MonthComponent } from './month/month.component';
import { AuthService } from "./auth.service";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./api.service";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatRippleModule
} from "@angular/material/core";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from '@angular/material';
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { AdminComponent } from './admin/admin.component';
import { AdminSessionComponent } from './admin-session/admin-session.component';
import { AdminAboComponent } from './admin-abo/admin-abo.component';
import { AdminCreateSessionComponent } from './admin-create-session/admin-create-session.component';
import { IgxTimePickerModule } from "igniteui-angular";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MAT_MOMENT_DATE_FORMATS} from "@angular/material-moment-adapter";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonthComponent,
    LoginComponent,
    ListPersonDialog,
    SignupComponent,
    ProfileComponent,
    AdminComponent,
    AdminSessionComponent,
    AdminAboComponent,
    AdminCreateSessionComponent,
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
        BrowserAnimationsModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        NgxMaterialTimepickerModule,
        MatTabsModule
    ],
  entryComponents: [
    MonthComponent,
    ListPersonDialog
  ],
  providers: [AuthService,
    ApiService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
