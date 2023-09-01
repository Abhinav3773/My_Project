package com.dental.VedDentalClinic.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.AppointmentDTO;

public interface AppointmentBookingService {

	public Integer bookAppointment(AppointmentDTO appointmentDTO) throws VedDentalException ;
	public List<AppointmentDTO> getAllAppointment() throws VedDentalException;
	public void updateAppointment(Integer appointmentId, LocalDate appointmentDate, LocalTime appointmentTime) throws VedDentalException;
	public void deleteAppointment(Integer appointmentId) throws VedDentalException;
}