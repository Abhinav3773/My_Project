package com.dental.VedDentalClinic.dto;

public class OtpResponseDTO {
	
	private OtpStatus status;
	private String message;
	
	
	public OtpResponseDTO(OtpStatus status, String message) {
		super();
		this.status = status;
		this.message = message;
	}
	
	
	public OtpStatus getStatus() {
		return status;
	}
	public void setStatus(OtpStatus status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
