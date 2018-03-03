package com.bans.user;

import com.bans.project.Project;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void registration(@RequestBody User userInput) {
        User userToPersist = new User(userInput.getName(), userInput.getPassword(), userInput.getEmail());
        this.userService.addUser(userToPersist);
    }

    @PostMapping("/user-login")
    public void login(@RequestBody User user) {
        System.out.println(user.getName());
    }
}
