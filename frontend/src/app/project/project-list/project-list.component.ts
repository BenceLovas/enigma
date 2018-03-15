import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../project';
import {Router} from '@angular/router';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() public projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(
        data => this.projects = data,
        error => console.log(error),
      );
  }

  navigateToProjectDetails(id) {
    this.router.navigate(['/project', id]);
  }

}
