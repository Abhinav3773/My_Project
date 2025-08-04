package com.dental.VedDentalClinic.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.PatientDTO;
import com.dental.VedDentalClinic.entity.Patient;
import com.dental.VedDentalClinic.repository.PatientRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PatientRegistrationServiceImpl implements PatientRegistrationService {
	
	@Autowired
	private PatientRepository patientRepository;

	@Override
	public Integer patientDetail(PatientDTO patientDTO) throws VedDentalException {
		
		Optional<Patient> optional = patientRepository.findByPhoneNo(patientDTO.getMobileNo());
		
		if(optional.isEmpty() || optional == null) {
			Patient patient = new Patient();
			patient.setGender(patientDTO.getGender());
			patient.setMobileNo(patientDTO.getMobileNo());
			patient.setPatientName(patientDTO.getPatientName());
			patientRepository.save(patient);
			return patient.getPatientId();
		}
		else {
				throw new VedDentalException("Service.PATIENT_WITH_SAME_DETAILS_EXSISTS");
		}
		
	}
	
	public List<PatientDTO> getAllPatient() throws VedDentalException{
		
		Iterable<Patient> patients = patientRepository.findAll();
		List<PatientDTO> patientsList = new ArrayList<>();
		
		patients.forEach(patient->{
			PatientDTO pt = new PatientDTO();
			pt.setPatientId(patient.getPatientId());
			pt.setMobileNo(patient.getMobileNo());
			pt.setGender(patient.getGender());
			pt.setPatientName(patient.getPatientName());
			patientsList.add(pt);
		});
		if(patientsList.isEmpty()) {
			throw new VedDentalException("Service.PATIENTS_NOT_FOUND");
		}
		return patientsList;
		
	}

}
