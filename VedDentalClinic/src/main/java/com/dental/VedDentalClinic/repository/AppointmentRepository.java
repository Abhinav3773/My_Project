package com.dental.VedDentalClinic.repository;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;

import com.dental.VedDentalClinic.entity.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Integer> {

}
