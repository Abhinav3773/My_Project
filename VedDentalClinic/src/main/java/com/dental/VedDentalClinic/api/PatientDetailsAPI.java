package com.dental.VedDentalClinic.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.PatientDTO;
import com.dental.VedDentalClinic.service.PatientRegistrationService;

@RestController
@Validated
@RequestMapping(value = "/VedDental")
public class PatientDetailsAPI {
	
	@Autowired
	private PatientRegistrationService patientRegistrationService;
	
	@Autowired
	private Environment environment;
	
	@PostMapping(value="/patientregister")
	public ResponseEntity<String> patientRegister(@RequestBody PatientDTO patientDTO) throws VedDentalException{
		
		Integer patientId = patientRegistrationService.patientDetail(patientDTO);
		String successMessage = environment.getProperty("API.PATIENT_REGISTERED_SUCCESS");
		return new ResponseEntity<>(successMessage,HttpStatus.CREATED);
		
	}
	
	@GetMapping(value="/patients")
	public ResponseEntity<List<PatientDTO>> getAllPatient() throws VedDentalException{
		List<PatientDTO> patientList = patientRegistrationService.getAllPatient();
		return new ResponseEntity<>(patientList,HttpStatus.OK);
	}

}
