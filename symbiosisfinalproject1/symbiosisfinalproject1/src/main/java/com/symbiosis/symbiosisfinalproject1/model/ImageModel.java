package com.symbiosis.symbiosisfinalproject1.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ImageModel {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
	private String name;
	@Column(length=50000000)
	private byte[] imageByte;
	public ImageModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ImageModel(String name, byte[] imageByte) {
		super();
		this.name = name;
		this.imageByte = imageByte;
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
	public byte[] getImageByte() {
		return imageByte;
	}
	public void setImageByte(byte[] imageByte) {
		this.imageByte = imageByte;
	}
	
}
