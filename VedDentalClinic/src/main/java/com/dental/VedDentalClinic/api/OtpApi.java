package com.dental.VedDentalClinic.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.OtpRequestDTO;
import com.dental.VedDentalClinic.dto.OtpResponseDTO;
import com.dental.VedDentalClinic.dto.OtpValidationRequestDTO;
import com.dental.VedDentalClinic.service.OtpService;

@RestController
@RequestMapping("/otp")
public class OtpApi {
	
	@Autowired
	private OtpService otpService;

	@GetMapping("/process")
	public String processSMS() {
		return "SMS sent";
	}
	
	@PostMapping("/sent-otp")
	public OtpResponseDTO sendOTP(@RequestBody OtpRequestDTO otpRequestDTO) throws VedDentalException{
		return otpService.sendOTP(otpRequestDTO);
		
	}
	
	@PostMapping("/validate-otp")
	public String validateOtp(@RequestBody OtpValidationRequestDTO otpValidationRequestDTO)throws VedDentalException{
		return otpService.validateOtp(otpValidationRequestDTO);
		
	}

}
