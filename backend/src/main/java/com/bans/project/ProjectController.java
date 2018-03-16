package com.bans.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class ProjectController {

    private ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/project")
    public ResponseEntity getProjects(HttpSession session) {
        Long userID = (long) session.getAttribute("userID");
        List<Project> projects = projectService.getProjects(userID);
        return ResponseEntity.ok(projects);
    }

    @PostMapping("/project")
    public ResponseEntity addProject(@RequestBody Project project, HttpSession session) {
        Long userID = (long) session.getAttribute("userID");
        List<Project> projects = projectService.addProject(userID, project);
        return ResponseEntity.ok(projects);
    }

}
