package com.bans.user;

import com.bans.user.exception.EmailAlreadyTakenException;
import com.bans.user.exception.InvalidCredentialsException;
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

    public Long addUser(User user) throws EmailAlreadyTakenException {
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        User userToPersist = new User(user.getName(), hashedPassword, user.getEmail());
        try {
            userRepository.save(userToPersist);
            return userToPersist.getId();
        } catch (DataIntegrityViolationException exception) {
            throw new EmailAlreadyTakenException("Email already in use");
        }
    }

    public Long validateUser(User user) throws InvalidCredentialsException {
        User foundUser = userRepository.findUserByEmail(user.getEmail());
        if (foundUser != null && BCrypt.checkpw(user.getPassword(), foundUser.getPassword())) {
            return foundUser.getId();
        } else {
            throw new InvalidCredentialsException("Email or password is invalid");
        }
    }
}
