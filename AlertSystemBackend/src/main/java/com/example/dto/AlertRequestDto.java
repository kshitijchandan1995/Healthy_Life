package com.example.dto;

import java.time.LocalTime;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AlertRequestDto {
	
	private LocalTime AlertTime;
	
	private String Desc;
	
	private int userid;
}
