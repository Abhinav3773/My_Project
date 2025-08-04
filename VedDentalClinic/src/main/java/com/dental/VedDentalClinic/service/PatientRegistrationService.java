package com.dental.VedDentalClinic.service;

import java.util.List;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.PatientDTO;

public interface PatientRegistrationService {

	public Integer patientDetail(PatientDTO patientDTO) throws VedDentalException;
	public List<PatientDTO> getAllPatient() throws VedDentalException;
}
