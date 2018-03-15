package com.bans.user;

import com.bans.project.Project;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.*;


@Entity
@Table(name = "[user]")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false)
    @Size(min = 5, max = 30)
    private String name;

    @Column(nullable = false)
    @Size(min = 60, max = 60)
    private String password;

    @Column(nullable = false, unique = true)
    @Email
    private String email;

    @Column(name = "registration_date", nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date registrationDate;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
        name = "user_project",
        joinColumns = { @JoinColumn(name = "user_id", nullable = false, updatable = false) },
        inverseJoinColumns = { @JoinColumn(name = "project_id", nullable = false, updatable = false) }
    )
    private List<Project> projects = new ArrayList<>();

    public User() {
    }

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public User(String name, String password, String email) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.registrationDate = new Date();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void addProject(Project project) {
        this.projects.add(project);
    }
}
