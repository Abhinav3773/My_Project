import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyappointmentsService {

  constructor(private http: HttpClient) { }

  myAppointments(data : Number) : Observable<any[]> {
    // return <Observable<any>> this.http.get<any[]>("http://localhost:8765/VedDental/my-appointments/"+ data);

    return <Observable<any>> this.http.get<any[]> (`http://localhost:8765/VedDental/my-appointments/${data}`);
  }

  deleteMyAppointment(appointmentId : Number) : Observable<any[]> {
    return <Observable<any>> this.http.delete<any[]> (`http://localhost:8765/VedDental/appointment/${appointmentId}`)
  }

  rescheduleMyAppointment(appointmentId : Number, appointmentDate : Date, appointmentTime : Number) : Observable<any[]> {
    const body = {};  
    return <Observable<any>> this.http.put<any[]> (`http://localhost:8765/VedDental/appointment/${appointmentId}/${appointmentDate}/${appointmentTime}`,body);
    
  }
}
