package com.bans.user;

import com.bans.project.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public void registration(@RequestBody String user) {
        System.out.println(user);
    }

    @PostMapping("/user-login")
    public void login(@RequestBody String user) {
        System.out.println(user);
    }
}
