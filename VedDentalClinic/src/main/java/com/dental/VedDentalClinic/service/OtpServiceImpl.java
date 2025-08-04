package com.dental.VedDentalClinic.service;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dental.VedDentalClinic.Config.TwilioConfig;
import com.dental.VedDentalClinic.Exception.VedDentalException;
import com.dental.VedDentalClinic.dto.OtpRequestDTO;
import com.dental.VedDentalClinic.dto.OtpResponseDTO;
import com.dental.VedDentalClinic.dto.OtpStatus;
import com.dental.VedDentalClinic.dto.OtpValidationRequestDTO;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class OtpServiceImpl implements OtpService{
	
	@Autowired
	private TwilioConfig twilioConfig;
	
	Map<String,String> otpMap = new HashMap<>();

	@Override
	public OtpResponseDTO sendOTP(OtpRequestDTO otpRequestDTO) throws VedDentalException {
		OtpResponseDTO otpResponseDTO = null;
		try {
			PhoneNumber to = new PhoneNumber(otpRequestDTO.getPhoneNumber());
			PhoneNumber from = new PhoneNumber(twilioConfig.getPhoneNumber());
			String otp = generateOTP();
			String otpMessage = "Dear User, Your OTP is " + otp + "Please Use This For Authentication..!";
			
			Message message = Message.creator(to,from,otpMessage).create();
			otpMap.put(otpRequestDTO.getUserName(), otp);
			
			otpResponseDTO = new OtpResponseDTO(OtpStatus.DELIVERED,otpMessage);
		}
		catch (Exception e){
			e.printStackTrace();
			otpResponseDTO = new OtpResponseDTO(OtpStatus.FAILED,e.getMessage());
		}
		return otpResponseDTO;
	}

	

	@Override
	public String validateOtp(OtpValidationRequestDTO otpValidationRequestDTO) throws VedDentalException {
		Set<String> keys = otpMap.keySet();
		String userName = null;
		for(String key : keys)
			userName = key;
		if(otpValidationRequestDTO.getUserName().equals(userName)) {
			otpMap.remove(userName,otpValidationRequestDTO.getOtpNumber());
			return "OTP is valid..!!";
		}
		else {
			return "OTP is invalid..!!";
		}
	
	}

	
	
	private String generateOTP() {
		return new DecimalFormat("000000").format(new Random().nextInt(999999));
	}
}
