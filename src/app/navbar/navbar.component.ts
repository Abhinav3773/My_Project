import { Component } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAuthenticate=false;
  otpVerification! : boolean;

  private subscription: Subscription;

  constructor(private datatransfer: DatatransferService) {
    // this.otpVerification = datatransfer.otpVerified;

     // Subscribe to the observable in the shared service
     this.subscription = this.datatransfer.componentAFunction$.subscribe(() => {
      this.pogo();
    });
  }

  login(){
    this.isAuthenticate=true;
  }

   pogo(){
    this.otpVerification = this.datatransfer.otpVerified;
    // alert("Hello Abhinav " + this.otpVerification);

    // this.otpVerification = true;
   }

}