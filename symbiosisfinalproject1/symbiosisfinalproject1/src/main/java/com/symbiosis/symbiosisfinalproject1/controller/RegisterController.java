package com.symbiosis.symbiosisfinalproject1.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.symbiosis.symbiosisfinalproject1.model.Register;
import com.symbiosis.symbiosisfinalproject1.repository.RegisterRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/project/")
public class RegisterController {

	@Autowired
	@Qualifier("registerRepo")
	RegisterRepository registerRepo;
	
	@RequestMapping("/")
	public String hello()
	{
		
		return "index";
	}
	
	@RequestMapping("/users")
	public ArrayList<Register> getAll()
	{
		ArrayList<Register> ls=(ArrayList<Register>)registerRepo.findAll();
		return ls;
		
	}
	@GetMapping("/users/{emailid}/{password}")
	public ResponseEntity<Register> search(@PathVariable("emailid") String emailid,@PathVariable("password") String password)
	{
		Register e=registerRepo.findByEmailIdAndPassword(emailid, password);
		return new ResponseEntity<Register>(e,HttpStatus.OK);
	}
	
	@PostMapping("/users")
	public Register insertrecord(@RequestBody Register e)
	{
		return registerRepo.save(e);
		
	}
	
	
}
