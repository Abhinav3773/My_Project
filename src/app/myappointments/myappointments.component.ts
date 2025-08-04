import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';
import { MyappointmentsService } from './myappointments.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.css']
})
export class MyappointmentsComponent implements OnInit{

  otpId!: any;
  errorMessage!: null;
  data!: any[];
  rescheduleAppointmentForm!: FormGroup;
  formValue!:any;
  appointmentTime!: Number;
  appointmentDate!: Date;

  constructor (private fb : FormBuilder,private datatransfer: DatatransferService,private router: Router, private myappointmentsService: MyappointmentsService) {
    this.otpId = this.datatransfer.otpId;
    // alert("OTP ID : " + typeof(this.otpId) + this.otpId);
  }

  successDeleteMessage(){
    Swal.fire("Thank You...",'Your Appointment Deleted Successfully','success');
  }

  successRescheduleMessage(){
    Swal.fire("Thank You...",'Your Appointment Reschedule Successfully','success');
  }
  
  ngOnInit() {

    this.rescheduleAppointmentForm = this.fb.group({
      dateInput:['',[Validators.required]],
      timeInput:['',[Validators.required]],
    
    })

    this.errorMessage = null;
    this.myappointmentsService.myAppointments(parseInt(this.otpId)).
    subscribe(
      (success) => {this.data = success;
                    // alert("ID : " + JSON.stringify(this.data))
                  },
      (error) => {this.errorMessage = error.error.message}
    )
  }

  deleteMyAppointment(appointmentId : any) {
    // alert("APPOINTMENT ID : " + typeof(appointmentId) + appointmentId);
    this.myappointmentsService.deleteMyAppointment(appointmentId).
    subscribe(
      (success) => {
        // alert(success + "Appointment Deleted Successfully..!!!"),
                    this.router.navigate(['/home']);},
      (error) => {alert(error.error.message)}
    )
  }

  rescheduleMyAppointment(appointmentId : any){
    this.formValue = this.rescheduleAppointmentForm.value;
    // alert("VALUES : " + this.rescheduleAppointmentForm.value);

    this.appointmentTime = this.formValue.timeInput;
    this.appointmentDate = this.formValue.dateInput;

    this.myappointmentsService.rescheduleMyAppointment(appointmentId, this.appointmentDate, this.appointmentTime).
    subscribe(
      (success) => {
        // alert("Update Successfully..!!!"),
        this.router.navigate(['/home']);
      }
    )
  }


}
