package com.symbiosis.symbiosisfinalproject1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admission {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String emailid,coursename,collegename,qualification;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getCoursename() {
	return coursename;
}
public void setCoursename(String coursename) {
	this.coursename = coursename;
}
public String getCollegename() {
	return collegename;
}
public void setCollegename(String collegename) {
	this.collegename = collegename;
}
public String getQualification() {
	return qualification;
}
public void setQualification(String qualification) {
	this.qualification = qualification;
}
public Admission() {
	super();
	// TODO Auto-generated constructor stub
}
public Admission( String emailid, String coursename, String collegename, String qualification) {
	super();
	this.emailid = emailid;
	this.coursename = coursename;
	this.collegename = collegename;
	this.qualification = qualification;
}

}
