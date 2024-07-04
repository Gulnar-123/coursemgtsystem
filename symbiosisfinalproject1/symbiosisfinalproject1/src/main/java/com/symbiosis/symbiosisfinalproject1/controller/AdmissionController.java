package com.symbiosis.symbiosisfinalproject1.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.symbiosis.symbiosisfinalproject1.model.Admission;
import com.symbiosis.symbiosisfinalproject1.model.Register;
import com.symbiosis.symbiosisfinalproject1.repository.AdmissionRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/project/")
public class AdmissionController {
	@Autowired
	@Qualifier("admissionRepo")
	AdmissionRepository admissionRepo;
	
	
	@RequestMapping("/admissions")
	public ArrayList<Admission> getAll()
	{
		ArrayList<Admission> ls=(ArrayList<Admission>)admissionRepo.findAll();
		return ls;
		
	}
	@PostMapping("/admissions")
	public Admission insertrecord(@RequestBody Admission e)
	{
		return admissionRepo.save(e);
		
	}
}
