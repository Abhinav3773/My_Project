package com.dental.VedDentalClinic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.dental.VedDentalClinic.entity.Patient;

public interface PatientRepository extends CrudRepository<Patient, Integer> {

	@Query("select m from Patient m where m.mobileNo=:mobileNo")
	Optional<Patient> findByPhoneNo(String mobileNo);

}
