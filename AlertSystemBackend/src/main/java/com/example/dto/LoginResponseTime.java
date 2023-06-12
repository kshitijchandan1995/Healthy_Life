package com.example.dto;

import java.time.LocalTime;
import java.util.List;

import com.example.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseTime {

	private Integer userID;
	
	private List<LocalTime> list;
}
