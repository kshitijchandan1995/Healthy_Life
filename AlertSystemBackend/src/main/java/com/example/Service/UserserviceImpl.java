package com.example.Service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.UserCreateRequset;
import com.example.dto.UserCredentials;
import com.example.entity.User;
import com.example.repository.UserRepository;

@Transactional
@Service
public class UserserviceImpl implements UserService{

	
	@Autowired
	private UserRepository userrepo;
	
	@Override
	public String create(UserCreateRequset userreq) {
		User user=new User(userreq.getFirstName(),userreq.getLastName(),userreq.getUsername(),userreq.getPassword(),userreq.getAge());
		userrepo.save(user);
		return "User Created Successfully";
	}

	@Override
	public User login(UserCredentials usercred) {	
		User user=userrepo.findByUserNameAndPassword(usercred.getUsername(),usercred.getPassword()).get();
		return user;
	}

	@Override
	public User findbyid(int id) {
		User user=userrepo.findById(id).orElseThrow();
		return user;
	}
	
	

	
}
