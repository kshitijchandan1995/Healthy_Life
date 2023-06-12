package com.example.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data

@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "user_tbl")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userId")
	private int ID;
	
	@Column(name="firstName")
	private String firstName;
	
	@Column(name="lastName")
	private String lastName;
	
	@Column(name = "userName",unique = true,nullable = false)
	private String userName;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "age")
	private int Age;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Alert> alertlist=new ArrayList<Alert>();

	public User(String userName, String password, int age) {
		super();
		this.userName = userName;
		this.password = password;
		Age = age;
	}

	@Override
	public String toString() {
		return "User [ID=" + ID + ", userName=" + userName + ", password=" + password + ", Age=" + Age + ", alertlist="
				+ alertlist + "]";
	}

	public User(String firstName, String lastName, String userName, String password, int age) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		Age = age;
	} 
	
	
}
