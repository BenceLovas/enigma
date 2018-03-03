import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private user: User;

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('api/user', user)
      .subscribe(
        x => console.log('Observer got a next value: ' + x),
        err => console.error('Observer got an error: ' + err),
      );
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>('api/user-login', user)
      .subscribe(
        x => console.log('value: ' + x),
        error => console.error('error: ' + error),
      );
  }
}
