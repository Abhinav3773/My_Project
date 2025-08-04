import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import { AdminviewComponent } from './Admin/adminview/adminview.component';
import { AdminappointmentlistComponent } from './Admin/adminappointmentlist/adminappointmentlist.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import {CanActivate} from './auth.guard'
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  // canActivate: [CanActivate]
  {path: 'contact', component: ContactComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'otpverification', component: OtpverificationComponent},
  {path: 'myappointments', component: MyappointmentsComponent},
  {path: 'adminview', component : AdminviewComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'adminappointmentlist', component: AdminappointmentlistComponent},
  {path: '', redirectTo: '/home' ,pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
