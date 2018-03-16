import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../../task';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {

  todo: Task[] = [];
  progress: Task[] = [];
  test: Task[] = [];
  done: Task[] = [];
  projectID: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private dragulaService: DragulaService) { }

  ngOnInit() {
    this.projectID = this.route.snapshot.paramMap.get('id');
    this.taskService.getTasks(this.projectID)
      .subscribe(
        data => this.todo = data,
        error => console.log(error),
      );
  }

}
