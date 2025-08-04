package com.dental.VedDentalClinic.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;


public class AppointmentDTO {

	private Integer appointmentId;

	@NotNull(message = "{appointment.appointmentdate.absent}")
	private LocalDate appointmentDate;

	@NotNull(message = "{appointment.appointmenttime.absent}")
	private LocalTime appointmentTime;

	@NotNull(message = "{appointment.appointmentproblem.absent}")
	private String problem;

	@NotNull(message = "{appointment.appointmentpatient.absent}")
	@Valid
	private PatientDTO patientDTO;


	public Integer getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(Integer appointmentId) {
		this.appointmentId = appointmentId;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public LocalTime getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(LocalTime appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public String getProblem() {
		return problem;
	}

	public void setProblem(String problem) {
		this.problem = problem;
	}

	public PatientDTO getPatientDTO() {
		return patientDTO;
	}

	public void setPatientDTO(PatientDTO patientDTO) {
		this.patientDTO = patientDTO;
	}

	
}
