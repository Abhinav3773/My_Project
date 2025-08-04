import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminappointmentlistserviceService {

  constructor(private http: HttpClient) { }

  allAppointments () : Observable<any[]> {
    return <Observable<any>> this.http.get<any[]> (`http://localhost:8765/VedDental/admin/appointment/get-all`)
  }

  deleteMyAppointment(appointmentId : Number) : Observable<any[]> {
    return <Observable<any>> this.http.delete<any[]> (`http://localhost:8765/VedDental/appointment/${appointmentId}`)
  }

  rescheduleMyAppointment(appointmentId : Number, appointmentDate : Date, appointmentTime : Number) : Observable<any[]> {
    const body = {};  
    return <Observable<any>> this.http.put<any[]> (`http://localhost:8765/VedDental/appointment/${appointmentId}/${appointmentDate}/${appointmentTime}`,body);
    
  }

  approveAll() : Observable<any[]> {
    return <Observable<any>> this.http.get<any[]> (`http://localhost:8765/VedDental/admin/appointment/approve-all`)
  }

  approveAppointment(appointmentId : Number) : Observable<any[]> {
    const body = {};  
    return <Observable<any>> this.http.put<any[]> (`http://localhost:8765/VedDental/admin/appointment/approve/${appointmentId}`,body)
  }
}
