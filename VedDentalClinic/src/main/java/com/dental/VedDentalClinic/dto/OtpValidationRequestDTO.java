package com.dental.VedDentalClinic.dto;

public class OtpValidationRequestDTO {
	
	private String userName;
	private String otpNumber;
	
	public OtpValidationRequestDTO(String userName, String otpNumber) {
		super();
		this.userName = userName;
		this.otpNumber = otpNumber;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getOtpNumber() {
		return otpNumber;
	}
	public void setOtpNumber(String otpNumber) {
		this.otpNumber = otpNumber;
	}
	
	

}
