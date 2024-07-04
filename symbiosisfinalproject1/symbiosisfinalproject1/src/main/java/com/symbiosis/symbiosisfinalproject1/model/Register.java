package com.symbiosis.symbiosisfinalproject1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Register {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String name,contact,emailid,password;
public Register(String name, String contact, String emailid, String password) {
	super();
	this.name = name;
	this.contact = contact;
	this.emailid = emailid;
	this.password = password;
}
public Register() {
	super();
	// TODO Auto-generated constructor stub
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getContact() {
	return contact;
}
public void setContact(String contact) {
	this.contact = contact;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
@Override
public String toString() {
	return "Register [id=" + id + ", name=" + name + ", contact=" + contact + ", emailid=" + emailid + ", password="
			+ password + "]";
}

}
