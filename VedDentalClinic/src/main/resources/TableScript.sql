drop database if exists VedDentalClinic_db;
create database VedDentalClinic_db;
use VedDentalClinic_db;

create table patient(
						patient_id int auto_increment,
						mobile_no varchar(10) not null,
						patient_name varchar(25) not null,
						gender varchar(6) not null,
						constraint ps_patient_id_pk primary key (patient_id)
					);
					
create table appointment(
							appointment_id int not null auto_increment,
							appointment_date date not null,
							appointment_time time not null,
							problem varchar(100),
							
							
							patient_id int references patient,
							constraint ps_appointment_id_pk primary key (appointment_id)
);
					
					
insert into patient (mobile_no,patient_name,gender) values('9368392539','Abhinav','Male');
insert into patient (mobile_no,patient_name,gender) values('8193043184','Mukul','Male');

insert into appointment (appointment_date,appointment_time,problem,patient_id) values ('2023-07-23','14:30:00','cavity',1);
insert into appointment (appointment_date,appointment_time,problem,patient_id) values ('2023-07-30','10:30:00','Regular Check up',2);

commit;
select * from patient;
select * from appointment;
