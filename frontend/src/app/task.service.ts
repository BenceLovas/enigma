import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Task} from './task';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {

  errorHandler(response: HttpErrorResponse) {
    return Observable.throw(response.error);
  }

  addTask(task: Task) {
    return this.http.post('api/task', task).catch(this.errorHandler);
  }

  constructor(private http: HttpClient) { }

}
