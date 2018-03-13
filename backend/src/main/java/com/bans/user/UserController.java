package com.bans.user;

import com.bans.project.Project;
import com.bans.user.exception.EmailAlreadyTakenException;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Collections;


@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Saves user to the database.
     * @param userInput from registration form (name, password, email) - JSON transformed to User
     * @return Returns error if email address already in use.
     */
    @PostMapping("/user")
    public ResponseEntity registration(@RequestBody User userInput, HttpSession session) {
        try {
            Long userID = this.userService.addUser(userInput);
            session.setAttribute("userID", userID);
            return ResponseEntity.ok(Collections.singletonMap("response", "success"));
        } catch (EmailAlreadyTakenException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Collections.singletonMap("email", userInput.getEmail()));
        }
    }

    /**
     * Validates user against database.
     * @param userInput from login form (email, password) - JSON transformed to User
     * @return Returns error if credentials are invalid.
     */
    @PostMapping("/user-login")
    public ResponseEntity login(@RequestBody User userInput) {
        boolean valid = userService.validateUser(userInput);
        if (valid) {
            return ResponseEntity.ok(Collections.singletonMap("response", "success"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Collections.singletonMap("response", "not valid"));
        }
    }
}
