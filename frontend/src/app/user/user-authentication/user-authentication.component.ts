import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.authenticateUser()
      .subscribe(
        data => this.router.navigate(['/dashboard']),
        error => this.router.navigate(['/login'])
      );
  }

}
