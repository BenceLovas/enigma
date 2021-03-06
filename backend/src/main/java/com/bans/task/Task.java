package com.bans.task;

import com.bans.project.Project;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Size(max = 60)
    private String title;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Column(name = "creation_date", nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    public Task() {
    }

    public Task(String title, Project project) {
        this.title = title;
        this.project = project;
        this.status = TaskStatus.TODO;
        this.creationDate = new Date();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public Project getProject() {
        return project;
    }
}
