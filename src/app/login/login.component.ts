import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatatransferService } from '../datatransfer.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  mobileRegister!:FormGroup;
  phoneNumber!:string
  errorMessage!: null;
  successMessage!: null;
  
constructor(private fb: FormBuilder, private datatransfer: DatatransferService, private loginService: LoginService){
  // console.log("Mobile Number : " + this.phoneNumber)
}

  ngOnInit(){
    this.mobileRegister = this.fb.group({
      phoneNumber:['',[Validators.required]]
    })
  }

  getOtp(){
    this.phoneNumber=this.mobileRegister.value;
    this.datatransfer.phone = this.phoneNumber; 
    // alert(JSON.stringify(this.mobileRegister.value))

    
    this.errorMessage = null;
    this.successMessage = null;
    this.loginService.sendOtp(this.mobileRegister.value)
    .subscribe(
      (success) => { this.successMessage = success.message},
      (error) => { this.errorMessage = error.error.message}
    )
  }
}
