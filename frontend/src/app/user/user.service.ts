import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  errorHandler(response: HttpErrorResponse) {
    return Observable.throw(response.error);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('api/user', user).catch(this.errorHandler);
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>('api/user-login', user).catch(this.errorHandler);
  }
}
