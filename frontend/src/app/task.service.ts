import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Task} from './task';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {

  errorHandler(response: HttpErrorResponse) {
    return Observable.throw(response.error);
  }

  addTask(data) {
    return this.http.post('api/task', data).catch(this.errorHandler);
  }

  getTasks(projectID) {
    return this.http.get('api/project/' + projectID + '/task').catch(this.errorHandler);
  }

  constructor(private http: HttpClient) { }

}
