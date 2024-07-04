package com.symbiosis.symbiosisfinalproject1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.symbiosis.symbiosisfinalproject1.model.Enroll;
import com.symbiosis.symbiosisfinalproject1.repository.EnrollRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/project/")
public class EnrollController {

	@Autowired
	@Qualifier("enRepo")
	private EnrollRepository enRepo;
	
	@PostMapping("/enroll")
	public Enroll enroll(@RequestBody Enroll e)
	{
		return enRepo.save(e);
	}
	
}
