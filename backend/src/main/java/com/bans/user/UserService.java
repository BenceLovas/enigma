package com.bans.user;

import org.mindrot.jbcrypt.BCrypt;
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
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        User userToPersist = new User(user.getName(), hashedPassword, user.getEmail());
        try {
            userRepository.save(userToPersist);
            return true;
        } catch (DataIntegrityViolationException exception) {
            System.out.println("email already in use");
            return false;
        }
    }

    public boolean validateUser(User user) {
        User foundUser = userRepository.findUserByEmail(user.getEmail());
        return foundUser != null && BCrypt.checkpw(user.getPassword(), foundUser.getPassword());
    }
}
