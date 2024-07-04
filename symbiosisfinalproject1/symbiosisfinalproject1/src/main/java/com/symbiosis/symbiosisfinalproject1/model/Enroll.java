package com.symbiosis.symbiosisfinalproject1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Enroll {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private long courseid;
private String emailid,collegename,qualification,batchtype;
public Enroll() {
	super();
	// TODO Auto-generated constructor stub
}

public long getId() {
	return id;
}
public Enroll(long courseid,  String emailid, String collegename, String qualification,
		String batchtype) {
	super();
	this.courseid = courseid;
	
	this.emailid = emailid;
	this.collegename = collegename;
	this.qualification = qualification;
	this.batchtype = batchtype;
}

public void setId(long id) {
	this.id = id;
}

public long getCourseid() {
	return courseid;
}

public void setCourseid(long courseid) {
	this.courseid = courseid;
}

public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
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
public String getBatchtype() {
	return batchtype;
}
public void setBatchtype(String batchtype) {
	this.batchtype = batchtype;
}

}
