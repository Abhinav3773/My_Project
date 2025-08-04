import { Component } from '@angular/core';
import { AdminappointmentlistserviceService } from './adminappointmentlistservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminappointmentlist',
  templateUrl: './adminappointmentlist.component.html',
  styleUrls: ['./adminappointmentlist.component.css']
})
export class AdminappointmentlistComponent {

data!:any;
rescheduleAppointmentForm!: FormGroup;
formValue!:any;
appointmentTime!: Number;
appointmentDate!: Date;

today: string;
maxDate: string;

constructor(private fb : FormBuilder,private router: Router, private appointmentListService: AdminappointmentlistserviceService) {
    appointmentListService.allAppointments().
    subscribe(
      (success) => {this.data = success
                    // alert("DATA : " + JSON.stringify(this.data))
                  },
        
      (error) => {alert(error.error.message)}
    )


    const localTime = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000));
    this.today = localTime.toISOString().split('T')[0]; // Get today's date
  
    const futureDate = new Date(localTime);
    futureDate.setDate(futureDate.getDate() + 9); // Get the date 10 days from now
    this.maxDate = futureDate.toISOString().split('T')[0]; // Get the max date
  }

  ngOnInit() {

    this.rescheduleAppointmentForm = this.fb.group({
      dateInput:['',[Validators.required]],
      timeInput:['',[Validators.required]],
    
    })
  }

  successDeleteMessage(){
    Swal.fire("Thank You...",'Your Appointment Deleted Successfully','success');
  }

  successRescheduleMessage(){
    Swal.fire("Thank You...",'Your Appointment Reschedule Successfully','success');
  }


  deleteMyAppointment(appointmentId : any) {
    // alert("APPOINTMENT ID : " + typeof(appointmentId) + appointmentId);
    this.appointmentListService.deleteMyAppointment(appointmentId).
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

    this.appointmentListService.rescheduleMyAppointment(appointmentId, this.appointmentDate, this.appointmentTime).
    subscribe(
      (success) => {
        // alert("Update Successfully..!!!"),
        this.router.navigate(['/home']);
      }
    )
  }

 

recallApproveAllData() {
  this.appointmentListService.allAppointments().
  subscribe(
    (success) => {this.data = success},
    (error) => {alert(error.error.message)}
  )
}

  approveAll() {
    this.appointmentListService.approveAll().
    subscribe(
      (success) => {
        // alert(JSON.stringify(success)),
      this.recallApproveAllData()},
      (error) => {alert(JSON.stringify(error.error.message))}
    )
  }


  approveAppointment(appointmentId : any){
    this.appointmentListService.approveAppointment(parseInt(appointmentId)).
    subscribe(
      (success)=> {
        // alert(JSON.stringify(success)),
        this.recallApproveAllData()},
      (error) => {alert(error.error.message)}
    )
  }


}
