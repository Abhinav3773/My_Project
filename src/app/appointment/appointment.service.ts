import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

appointment(data: any) : Observable<any>{
  return <Observable<any>> this.http.post("http://localhost:8765/VedDental/bookappointment",data);
}

}