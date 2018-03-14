package com.bans.project;

import com.bans.user.User;
import com.bans.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class ProjectService {

    private ProjectRepository projectRepository;
    private UserRepository userRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    public Set<Project> addProject(Long userID, Project project) {
        Project projectToPersist = new Project(project.getTitle());
        User user = userRepository.findOne(userID);
        user.addProject(projectToPersist);
        userRepository.save(user);

        return user.getProjects();
    }
}
