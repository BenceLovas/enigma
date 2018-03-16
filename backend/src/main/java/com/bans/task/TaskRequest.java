package com.bans.task;

public class TaskRequest {
    private Long projectID;
    private Task task;

    public TaskRequest() {
    }

    public TaskRequest(Long projectID, Task task) {
        this.projectID = projectID;
        this.task = task;
    }

    public Long getProjectID() {
        return projectID;
    }

    public void setProjectID(Long projectID) {
        this.projectID = projectID;
    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }
}
