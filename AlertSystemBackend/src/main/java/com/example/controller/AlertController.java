package com.example.controller;

import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Service.AlertService;
import com.example.Service.UserService;
import com.example.dto.AlertRequestDto;
import com.example.entity.Alert;
import com.example.entity.User;


@RestController
@RequestMapping("/alert")
@CrossOrigin(origins= "*")
public class AlertController {

	@Autowired
	private AlertService alertService;
	
	@Autowired 
	private UserService userservice;
	
	@PostMapping("/create")
	private ResponseEntity<?> createAlert(@RequestBody AlertRequestDto alert){
//		System.out.println(alert.getId()+"1111111111111111");
		User	user=userservice.findbyid(alert.getUserid());
		alertService.createalert(alert,user);
		
		return ResponseEntity.ok("Created");
	}
	
	@GetMapping("/getAlert/{id}")
	private ResponseEntity<?> getAlert(@PathVariable int id){	
		System.out.println("sssssssssssssssaaaaaaaa"+id);
	User user=userservice.findbyid(id);
	System.out.println(user.getUserName()+":::::::::::");
//	user.getAlertlist().forEach(System.out::println);
	
	List<Alert> list=alertService.findAllAlertsForUser(user);
	for(Alert alert : user.getAlertlist()) {
		System.out.println(alert.getAlertTime()+"  "+LocalTime.now());
		if(alert.getAlertTime().getHour()==LocalTime.now().getHour() &&alert.getAlertTime().getMinute()==LocalTime.now().getMinute() ) {
			return ResponseEntity.ok(alert);
		}
	}
	return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Alert Not found");
//	return ResponseEntity.ok(list);
	}
	
	@GetMapping("/getAllAlert/{id}")
	private ResponseEntity<?> getAllAlert(@PathVariable int id){
		
		System.out.println(id+"ssssssssssssssss");
		User user=userservice.findbyid(id);
	return ResponseEntity.ok(user.getAlertlist());
	
	}
	
	@DeleteMapping("/delete/{id}")
	private ResponseEntity<?> delete(@PathVariable int id){			
		alertService.Deletebyuseridandalertid(id);
	return ResponseEntity.ok("Deleted..!!!");
	} 
	
	
}
