import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpverificationService {

  constructor(private http: HttpClient) { }

  otpVerify(data : any) : Observable<any> {
    return <Observable<any>> this.http.post("http://localhost:8765/otp/validate-otp",data, { responseType: 'text' });
  }
}
