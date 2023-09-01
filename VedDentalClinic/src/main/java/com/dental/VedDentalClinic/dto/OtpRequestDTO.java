package com.dental.VedDentalClinic.dto;

import jakarta.validation.constraints.NotNull;

public class OtpRequestDTO {
	
	@NotNull
	private String phoneNumber;
	@NotNull
	private String userName;

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
}
