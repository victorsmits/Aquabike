import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListPersonDialog, MonthComponent } from './month/month.component';
import { AuthService } from "./service/auth.service";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./service/api.service";
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
import {
  MatCheckboxModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSnackBar,
  MatSnackBarContainer,
  MatSnackBarModule,
  MatSortModule
} from '@angular/material';
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SignupComponent } from './signup/signup.component';
import {EditProfileComponent, ProfileComponent} from './profile/profile.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { AdminComponent } from './admin/admin.component';
import { AdminSessionComponent } from './admin-session/admin-session.component';
import {AdminAboComponent, PaymentDialog, ShowEditAboType} from './admin-abo/admin-abo.component';
import {AdminCreateSessionComponent, ConfimGenerationComponent} from './admin-create-session/admin-create-session.component';
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatTabsModule} from "@angular/material/tabs";
import {CookieService} from "ngx-cookie-service";
import {TypeSessionComponent} from './type-session/type-session.component';
import {AddTypeSessionComponent} from './type-session/add-type-session.component';
import {EditTypeSessionComponent} from './type-session/edit-type-session.component';
import {DelAboComponent} from './admin-abo/del-abo.component';
import {listAboSession} from './type-session/list-abo-session.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {DelTypeSessionComponent} from './type-session/del-type-session.component';
import {MatRadioModule} from '@angular/material/radio';

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
    ShowEditAboType,
    EditProfileComponent,
    TypeSessionComponent,
    AddTypeSessionComponent,
    ConfimGenerationComponent,
    EditTypeSessionComponent,
    DelAboComponent,
    listAboSession,
    MenuComponent,
    DelTypeSessionComponent,
    PaymentDialog
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
        MatTabsModule,
        MatSortModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatPaginatorModule,
        FlexLayoutModule,
        LayoutModule,
        MatSidenavModule,
        MatRadioModule
    ],
  entryComponents: [
    MonthComponent,
    ListPersonDialog,
    ShowEditAboType,
    EditProfileComponent,
    AddTypeSessionComponent,
    ConfimGenerationComponent,
    EditTypeSessionComponent,
    DelAboComponent,
    listAboSession,
    DelTypeSessionComponent,
    PaymentDialog
  ],
  providers: [
    AuthService,
    ApiService,
    MatDialogModule,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    MatDatepickerModule,
    CookieService,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
