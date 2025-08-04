import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import { AdminviewComponent } from './Admin/adminview/adminview.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminappointmentlistComponent } from './Admin/adminappointmentlist/adminappointmentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ReviewComponent,
    LoginComponent,
    OtpverificationComponent,
    MyappointmentsComponent,
    AdminviewComponent,
    AdminloginComponent,
    AdminappointmentlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
