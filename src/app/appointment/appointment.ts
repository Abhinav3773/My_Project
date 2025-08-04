import { Time } from "@angular/common";

export class Appointment {
    patientName!: string;
    appointmentDate!: Date;
    appointmentTime!: Time;
    problem!: string;
    otpDTO!: Object;
}
