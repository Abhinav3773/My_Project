package com.dental.VedDentalClinic.dto;

import jakarta.validation.constraints.NotNull;

public class PatientDTO {
		
	private Integer patientId;
	
	@NotNull
	private String mobileNo;
	@NotNull
	private String patientName;
	@NotNull
	private String  gender;
	

	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
}
