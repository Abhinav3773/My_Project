import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  constructor() { }

  phone="";
  otpVerified!: boolean;
  otpId!: any;
  otpNumber!:any;




  // Subject for communication
  private componentAFunctionSubject = new Subject<void>();

  // Observable to subscribe to in Component A
  componentAFunction$ = this.componentAFunctionSubject.asObservable();

  // Function to trigger in Component A
  triggerComponentAFunction(): void {
    this.componentAFunctionSubject.next();
  }

}
