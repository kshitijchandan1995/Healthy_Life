package com.example.entity;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="alert_tbl")
public class Alert {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "alertId")
	private int id;
	
	@Column(name ="alerrtTime")
	private LocalTime AlertTime;
	
	@Column(name ="description")
	private String Desc;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	@JsonIgnore
	private User user;

	public Alert(LocalTime alertTime, String desc, User user) {
		super();
		AlertTime = alertTime;
		Desc = desc;
		this.user = user;
	}

	@Override
	public String toString() {
		return "Alert [id=" + id + ", AlertTime=" + AlertTime + ", Desc=" + Desc + ", user=" + user + "]";
	}
	
	
}
