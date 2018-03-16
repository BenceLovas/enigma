import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {Project} from '../project';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  updatedProjects: Project[] = [];

  constructor(
    private projectService: ProjectService) { }

  ngOnInit() {
  }

  handleAddProjectEvent(projects: Project[]) {
    this.updatedProjects = projects;
  }
}
