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

  projects: Project[] = [];
  projectForm: FormGroup;
  matcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched));
    }
  };

  constructor(
    private projectService: ProjectService,
    private formBuilder: FormBuilder) { }

  onSubmit(form: any) {
    const project: Project = {
      title: form.title,
    };
    this.projectForm.reset();
    this.projectService.addProject(project)
      .subscribe(
        data => {
          this.projects = data;
        },
        error => console.log(error),
      );
  }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      'title': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
      ])],
    });
  }

}
