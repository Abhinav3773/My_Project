import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatatransferService } from '../datatransfer.service';
import { OtpverificationService } from './otpverification.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})

export class OtpverificationComponent implements OnInit{
  
  otpForm!:FormGroup
  mobileNumber:any
  formValue!:any
  data!:any
  errorMessage!: null;
  successMessage!: null;
  isLogged!: Boolean;

  private subscription: Subscription = new Subscription;
  
  //This is used for hide/display the bookAppointment
  otpVerified: boolean = false;

  constructor(private fb: FormBuilder,private router: Router, private datatransfer: DatatransferService,private otpService : OtpverificationService){
    this.mobileNumber = this.datatransfer.phone;
    
  }

  
  
  ngOnInit(){
   this.otpForm = this.fb.group({
    otpNumber:['',[Validators.required]]
   })
  }

  verify(){
    this.isLogged = false;
    this.formValue = this.otpForm.value;
    this.datatransfer.otpNumber = this.formValue.otpNumber;
    
    this.data = {
      'mobileNumber' : this.mobileNumber.phoneNumber,
      'otpNumber' : this.formValue.otpNumber
    }

    this.errorMessage=null;
    this.successMessage=null;
    this.otpService.otpVerify(this.data)
    .subscribe(
      (success) => {this.successMessage = success;
                    this.datatransfer.otpId = this.successMessage;
                    // alert("OTP ID : " + this.successMessage);
                    this.router.navigate(['/home']);
                    this.otpVerified=true;
                    this.datatransfer.otpVerified = this.otpVerified;
                    this.isLogged = true;
                    // alert(this.isLogged)
                                        
                    // This is used to trigger the function inside the shared service class 
                    this.datatransfer.triggerComponentAFunction();},

      (error) => {this.errorMessage = error.message;
                  this.isLogged = false;
                  Swal.fire('Invalid OTP','Please Povide a Valid OTP', 'error')
                  this.datatransfer.otpVerified = this.otpVerified}
    
              )
   
  }
  
  logout() {
    this.isLogged = false;
  }
  
  isAuthenticated() {
    return this.isLogged;
  }

}