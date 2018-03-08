package com.bans.user;

import com.bans.project.Project;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
     */
    @PostMapping("/user")
    public ResponseEntity registration(@RequestBody User userInput) {
        boolean success = this.userService.addUser(userInput);
        if (success) {
            return ResponseEntity.ok(Collections.singletonMap("response", "success"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Collections.singletonMap("email", userInput.getEmail()));
        }
    }

    @PostMapping("/user-login")
    public ResponseEntity login(@RequestBody User user) {
        boolean valid = userService.validateUser(user);
        if (valid) {
            return ResponseEntity.ok(Collections.singletonMap("response", "success"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Collections.singletonMap("response", "not valid"));
        }
//        System.out.println(user.getEmail());
//        System.out.println(user.getPassword());
    }
}
