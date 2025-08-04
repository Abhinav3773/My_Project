package com.dental.VedDentalClinic.api;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.AppointmentDTO;
import com.dental.VedDentalClinic.service.AppointmentBookingService;

@RestController
@Validated
@RequestMapping(value = "/VedDental")
public class AppointmentBookingAPI {

	@Autowired
	private AppointmentBookingService appointmentBookingService;

	@Autowired
	private Environment environment;

	@PostMapping(value = "/bookappointment")
	public ResponseEntity<String> bookAppointment(@RequestBody AppointmentDTO appointmentDTO)
			throws VedDentalException {
		Integer appointmentId = appointmentBookingService.bookAppointment(appointmentDTO);
		String successMessage = environment.getProperty("API.APPOINTMENT_BOOKING_SUCCESS") + appointmentId;
		return new ResponseEntity<>(successMessage, HttpStatus.CREATED);

	}

	@GetMapping(value = "/appointment")
	public ResponseEntity<List<AppointmentDTO>> getAllAppointmengt() throws VedDentalException {
		List<AppointmentDTO> appointments = appointmentBookingService.getAllAppointment();
		return new ResponseEntity<>(appointments, HttpStatus.OK);
	}

	@PutMapping(value = "/appointment/{appointmentId}/{appointmentDate}/{appintmentTime}")
	public ResponseEntity<String> updateAppointment(@PathVariable Integer appointmentId,
			@PathVariable LocalDate appointmentDate, @PathVariable LocalTime appintmentTime) throws VedDentalException {
		appointmentBookingService.updateAppointment(appointmentId, appointmentDate, appintmentTime);
		String successMessage = environment.getProperty("API.APPOINTMENT_UPDATE_SUCCESS");
		return new ResponseEntity<>(successMessage, HttpStatus.OK);

	}

	@DeleteMapping(value = "/appointment/{appointmentId}")
	public ResponseEntity<String> deleteAppointment(@PathVariable Integer appointmentId) throws VedDentalException {
		appointmentBookingService.deleteAppointment(appointmentId);
		String successMessage = environment.getProperty("API.APPOINTMENT_DELETE_SUCCESS");
		return new ResponseEntity<>(successMessage, HttpStatus.OK);
	}
}
