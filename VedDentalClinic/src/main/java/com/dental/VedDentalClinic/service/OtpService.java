package com.dental.VedDentalClinic.service;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.OtpRequestDTO;
import com.dental.VedDentalClinic.dto.OtpResponseDTO;
import com.dental.VedDentalClinic.dto.OtpValidationRequestDTO;

public interface OtpService {
	
	public OtpResponseDTO sendOTP(OtpRequestDTO otpRequestDTO) throws VedDentalException ;
	public String validateOtp(OtpValidationRequestDTO otpValidationRequestDTO) throws VedDentalException ;
}
