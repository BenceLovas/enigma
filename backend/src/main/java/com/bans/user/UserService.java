package com.bans.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(Long id) {
        return userRepository.findOne(id);
    }

    public boolean addUser(User user) {
        try {
            userRepository.save(user);
            return true;
        } catch (DataIntegrityViolationException exception) {
            System.out.println("email already in use");
            return false;
        }
    }
}
