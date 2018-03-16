package com.bans.task;

import com.bans.project.Project;
import com.bans.project.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private TaskRepository taskRepository;
    private ProjectRepository projectRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository, ProjectRepository projectRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
    }

    public List<Task> getTasks(Long projectID) {
        Project project = this.projectRepository.findOne(projectID);
        return project.getTasks();
    }

    public List<Task> addTask(Task task, Long projectID) {
        Project project = this.projectRepository.findOne(projectID);
        Task taskToPersist = new Task(task.getTitle(), project);
        project.addTask(taskToPersist);
        this.projectRepository.save(project);

        return project.getTasks();
    }
}
