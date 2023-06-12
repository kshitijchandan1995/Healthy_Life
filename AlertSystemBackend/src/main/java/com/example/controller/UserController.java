package com.example.controller;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Service.UserService;
import com.example.dto.LoginResponseTime;
import com.example.dto.UserCreateRequset;
import com.example.dto.UserCredentials;
import com.example.entity.Alert;
import com.example.entity.User;


@RestController
@CrossOrigin(origins= "*")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@PostMapping("/signup")
	private ResponseEntity<?> CreatUser(@RequestBody @Valid UserCreateRequset user){
		System.out.println(user.getUsername());
		String str=userservice.create(user);
		return ResponseEntity.ok(str);
	}
	
	@PostMapping("/signin")
	private ResponseEntity<?> LoginUser(@RequestBody UserCredentials usercred){
		
//		System.out.println(usercred.getPassword()+" aaaaaaaaaaaaaaaaaaaaaa"+usercred.getUsername());
		
		User user=userservice.login(usercred);
		if(user==null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Wrong user cred");
		}
		List<LocalTime> list=new ArrayList<LocalTime>();
		for(Alert alert: user.getAlertlist()) {
			list.add(alert.getAlertTime());
		}
		Integer UserID = user.getID();
		return ResponseEntity.ok(new LoginResponseTime(UserID,list));
	}
	
	
}
