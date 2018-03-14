import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Project} from './project';

@Injectable()
export class ProjectService {

  errorHandler(response: HttpErrorResponse) {
    return Observable.throw(response.error);
  }

  addProject(project: Project): Observable<Project[]>{
    return this.http.post('api/project', project).catch(this.errorHandler);
  }

  constructor(private http: HttpClient) { }

}
