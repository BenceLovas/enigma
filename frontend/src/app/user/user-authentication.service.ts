import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class UserAuthenticationService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.http.get('api/user-authenticate')
      .map(response => {
        return true;
      })
      .catch((error) => {
        this.router.navigate(['/login']);
        return Observable.of(false);
      });
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

}
