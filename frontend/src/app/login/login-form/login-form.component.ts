import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  @Input() public isPanelOpen;
  @Output() public toggleEvent = new EventEmitter();
  loginForm: FormGroup;
  invalidCredentials = false;
  matcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  };

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      ])],
      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ])],
    });
  }

  onSubmit(form: any) {
    const user: User = {
      email: form.email,
      password: form.password,
    };
    this.userService
      .loginUser(user)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error);
          this.invalidCredentials = true;
        }
      );
  }

  togglePanel() {
    this.toggleEvent.emit(this.isPanelOpen);
  }
}
