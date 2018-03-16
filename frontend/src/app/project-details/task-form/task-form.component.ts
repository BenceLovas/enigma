import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../../task.service';
import {Task} from '../../task';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() public addTaskEvent = new EventEmitter();
  projectID: string;
  taskForm: FormGroup;
  matcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return !!(control && control.invalid && control.dirty);
    }
  };

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  onSubmit(form: any) {
    const task: Task = {
      title: form.title,
    };
    const dataToSend = {
      task: task,
      projectID: this.projectID
    };
    this.taskService.addTask(dataToSend)
      .subscribe(
        data => {
          this.taskForm.reset();
          this.addTaskEvent.emit(data);
          console.log(data);
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
    this.projectID = this.route.snapshot.paramMap.get('id');
    this.taskForm = this.formBuilder.group({
      'title': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(60),
      ])],
    });
  }

}
