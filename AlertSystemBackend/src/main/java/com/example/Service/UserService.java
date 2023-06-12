package com.example.Service;

import com.example.dto.UserCreateRequset;
import com.example.dto.UserCredentials;
import com.example.entity.User;

public interface UserService {

	String create(UserCreateRequset user);

	User login(UserCredentials usercred);

	User findbyid(int id);

}
