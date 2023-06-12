package com.example.dto;

import javax.validation.constraints.Min;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Setter
@Getter
public class UserCreateRequset {
	
	private String firstName;
	private String lastName;
	private String username;
	
	private String password;
	@Min(value = 65)
	private int age;


	
	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public UserCreateRequset() {
		super();
	}



	public UserCreateRequset(String firstName, String lastName, String username, String password, int age) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.age = age;
	}
	
	
}
