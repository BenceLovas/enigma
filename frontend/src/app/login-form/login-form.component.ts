import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from '../user.service';
import {User} from '../user';

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  matcher = new LoginErrorStateMatcher();
  loginForm: FormGroup;

  @Input() public isPanelOpen;
  @Output() public toggleEvent = new EventEmitter();

  togglePanel() {
    this.toggleEvent.emit(this.isPanelOpen);
  }

  loginUser(user: User) {
    this.userService.loginUser(user);
  }

  onSubmit(form: any) {
    const user: User = new User(form.username, form.password);
    this.loginUser(user);
  }

  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      'username': ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ])],
      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ])],
    });
  }

  ngOnInit() {
  }

}
