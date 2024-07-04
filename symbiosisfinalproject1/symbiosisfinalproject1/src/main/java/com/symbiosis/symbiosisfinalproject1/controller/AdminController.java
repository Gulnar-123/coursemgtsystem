package com.symbiosis.symbiosisfinalproject1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.symbiosis.symbiosisfinalproject1.model.Admin;
import com.symbiosis.symbiosisfinalproject1.model.Register;
import com.symbiosis.symbiosisfinalproject1.repository.AdminRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/project/")
public class AdminController {
	@Autowired
	@Qualifier("admRepo")
	AdminRepository admRepo;
	@GetMapping("/admin/{emailid}/{password}")
	public ResponseEntity<Admin> search(@PathVariable("emailid") String emailid,@PathVariable("password") String password)
	{
		Admin e=admRepo.findByEmailIdAndPassword(emailid, password);
		return new ResponseEntity<Admin>(e,HttpStatus.OK);
	}
	

}
