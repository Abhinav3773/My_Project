import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendOtp(data : any ) : Observable<any>{
    return <Observable<any>> this.http.post("http://localhost:8765/otp/sent-otp",data)
  }
}
