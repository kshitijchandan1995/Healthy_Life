package com.example.Service;

import java.util.List;

import com.example.dto.AlertRequestDto;
import com.example.entity.Alert;
import com.example.entity.User;

public interface AlertService {

	void createalert(AlertRequestDto alert,User user);

	void Deletebyuseridandalertid(int alertid);

	List<Alert> findAllAlertsForUser(User user);

//	Alert getalert(User user);

}
