package com.dental.VedDentalClinic.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.AppointmentDTO;
import com.dental.VedDentalClinic.dto.PatientDTO;
import com.dental.VedDentalClinic.entity.Appointment;
import com.dental.VedDentalClinic.entity.Patient;
import com.dental.VedDentalClinic.repository.AppointmentRepository;
import com.dental.VedDentalClinic.repository.PatientRepository;
//import com.dental.VedDentalClinic.repository.PatientRepository;

@Service(value = "appointmentService")
@Transactional
public class AppointmentBookingServiceImpl implements AppointmentBookingService {

	@Autowired
	private AppointmentRepository appointmentRepository;
//
	@Autowired
	private PatientRepository patientRepository;

	@Override
	public Integer bookAppointment(AppointmentDTO appointmentDTO) throws VedDentalException {

		Optional<Patient> optional = patientRepository.findById(appointmentDTO.getPatientDTO().getPatientId());
		Patient patient = optional.orElseThrow(() -> new VedDentalException("Service.PATIENT_NOT_FOUND"));

		Appointment appointment = new Appointment();
		appointment.setAppointmentDate(appointmentDTO.getAppointmentDate());
		appointment.setAppointmentTime(appointmentDTO.getAppointmentTime());
		appointment.setPatient(patient);
		appointment.setProblem(appointmentDTO.getProblem());
		appointmentRepository.save(appointment);
		return appointment.getAppointmentId();

	}

	@Override
	public List<AppointmentDTO> getAllAppointment() throws VedDentalException {

		Iterable<Appointment> appointments = appointmentRepository.findAll();
		List<AppointmentDTO> appointmentList = new ArrayList<>();

		appointments.forEach(appointment -> {
			AppointmentDTO apt = new AppointmentDTO();
			apt.setAppointmentId(appointment.getAppointmentId());
			apt.setAppointmentDate(appointment.getAppointmentDate());
			apt.setAppointmentTime(appointment.getAppointmentTime());
			apt.setProblem(appointment.getProblem());

			PatientDTO ptn = new PatientDTO();
			ptn.setPatientId(appointment.getPatient().getPatientId());
			ptn.setPatientName(appointment.getPatient().getPatientName());
			ptn.setMobileNo(appointment.getPatient().getMobileNo());
			ptn.setGender(appointment.getPatient().getGender());

			apt.setPatientDTO(ptn);

			appointmentList.add(apt);
		});

		if (appointmentList.isEmpty()) {
			throw new VedDentalException("Service.APPOINTMENTS_NOT_FOUND");
		}
		return appointmentList;
	}

	@Override
	public void updateAppointment(Integer appointmentId, LocalDate appointmentDate, LocalTime appointmentTime)
			throws VedDentalException {
		Optional<Appointment> optional = appointmentRepository.findById(appointmentId);
		Appointment appointment = optional.orElseThrow(() -> new VedDentalException("Service.APPOINTMENTS_NOT_FOUND"));

		appointment.setAppointmentDate(appointmentDate);
		appointment.setAppointmentTime(appointmentTime);
		appointmentRepository.save(appointment);
	}

	@Override
	public void deleteAppointment(Integer appointmentId) throws VedDentalException {
		Optional<Appointment> optional = appointmentRepository.findById(appointmentId);
		Appointment appointment = optional.orElseThrow(() -> new VedDentalException("Service.APPOINTMENTS_NOT_FOUND"));
		appointmentRepository.deleteById(appointmentId);
	}
}
