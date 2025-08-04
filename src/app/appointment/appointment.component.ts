import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppointmentService } from './appointment.service';
import Swal from 'sweetalert2';
import { DatatransferService } from '../datatransfer.service';
import { Router } from '@angular/router';
import { min } from 'rxjs';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  appointmentForm!: FormGroup;
  errorMessage!: null;
  successMessage!: null;
  otpId!: any;
  data!:any;
  formValue!:any;
  mobileNumber:any;
  otpNumber!:any;

  today: string;
  maxDate: string;
  

  
constructor(private fb : FormBuilder,private router: Router, private datatransfer: DatatransferService, private dataRead: AppointmentService){
  this.otpId = this.datatransfer.otpId;
  this.mobileNumber = this.datatransfer.phone;
  
  // this.today = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().split('T')[0];
  const localTime = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000));
  this.today = localTime.toISOString().split('T')[0]; // Get today's date

  const futureDate = new Date(localTime);
  futureDate.setDate(futureDate.getDate() + 9); // Get the date 10 days from now
  this.maxDate = futureDate.toISOString().split('T')[0]; // Get the max date
  // alert(this.today)

 }

  ngOnInit()  {
    this.appointmentForm = this.fb.group({
      patientName:['',[Validators.required]],
      dateInput:['',[Validators.required]],
      timeInput:['',[Validators.required, Validators.min(10), Validators.max(20)]],
      problemDescription:['',[Validators.required]]
    })
  }

  success(){
    Swal.fire("Thank You...",'Your Appointment Booked Successfully','success');
  }

  appointmentBook() {

    this.formValue = this.appointmentForm.value;

    this.data = {
      'patientName' : this.formValue.patientName,
      'appointmentDate' :this.formValue.dateInput,
      'appointmentTime' :this.formValue.timeInput,
      'problem' :this.formValue.problemDescription,
      'otpDTO' :{
        'otpId' : this.otpId,
        'mobileNumber' : this.mobileNumber.phoneNumber, 
        'otpNumber' : this.otpNumber}
    }


    this.errorMessage = null;
    this.successMessage = null;
    this.dataRead.appointment(this.data)
    .subscribe(
      (success) => { this.successMessage = success.message,
                      this.router.navigate(['/home']);},
      (error) => { this.errorMessage = error.error.message}
    )
  }


}
