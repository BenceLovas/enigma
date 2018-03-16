import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Project} from '../../project';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Output() public addProjectEvent = new EventEmitter();
  projectForm: FormGroup;
  matcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return !!(control && control.invalid && control.dirty);
    }
  };

  constructor(
    private projectService: ProjectService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      'title': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
      ])],
    });
  }

  onSubmit(form: any) {
    const project: Project = {
      title: form.title,
    };
    this.projectService.addProject(project)
      .subscribe(
        data => {
          this.projectForm.reset();
          this.addProjectEvent.emit(data);
          // this.projects = data;
          // TODO emit data to update project list
        },
        error => console.log(error),
      );
  }

}
