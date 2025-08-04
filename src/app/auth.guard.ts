import { inject } from "@angular/core"
import { OtpverificationComponent } from "./otpverification/otpverification.component"


export const CanActivate = () => {
    const otp = inject(OtpverificationComponent)
    
    if(otp.isAuthenticated()){
        alert(otp.isAuthenticated());
        return true;
      }
      else{
        alert(otp.isAuthenticated());
        return false;
      }
}