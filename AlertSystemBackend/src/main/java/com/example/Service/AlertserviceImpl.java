package com.example.Service;

import java.time.LocalTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.AlertRequestDto;
import com.example.entity.Alert;
import com.example.entity.User;
import com.example.repository.AlertRepository;

@Transactional
@Service
public class AlertserviceImpl implements AlertService{

	@Autowired
	private AlertRepository alertRepo;
	
	
	@Override
	public void createalert(AlertRequestDto alertreq,User user) {
		Alert alert =new Alert(alertreq.getAlertTime(),alertreq.getDesc(),user);
		alertRepo.save(alert);
	}

	@Override
	public void Deletebyuseridandalertid(int alertid) {
		alertRepo.deleteByid(alertid);
		
	}

	@Override
	public List<Alert> findAllAlertsForUser(User user) {
		List<Alert> list= alertRepo.findByUser(user);
//		list.forEach(System.out::println);
//		System.out.println(list.get(0).getAlertTime());
		return list;
	}



	
}
