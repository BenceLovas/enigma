package com.bans.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/project/{id}/task")
    public ResponseEntity getTasks(@PathVariable("id") Long projectID) {
        List<Task> tasks = this.taskService.getTasks(projectID);
        return ResponseEntity.ok(tasks);
    }

    @PostMapping("/task")
    public ResponseEntity addTask(@RequestBody TaskRequest request) {
        List<Task> tasks= this.taskService.addTask(request.getTask(), request.getProjectID());
        return ResponseEntity.ok(tasks);
    }
}
