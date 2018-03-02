import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from '../user.service';
import {User} from '../user';

export class RegistrationErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {

  matcher = new RegistrationErrorStateMatcher();
  registrationForm: FormGroup;

  @Input() public isPanelOpen;
  @Output() public toggleEvent = new EventEmitter();


  togglePanel() {
    this.toggleEvent.emit(this.isPanelOpen);
  }

  registerUser(user: User) {
    this.userService.registerUser(user);
  }

  onSubmit(form: any) {
    const user: User = new User(form.username, form.password, form.email);
    this.registerUser(user);
  }

  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
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
      'email': ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      ])],
    });
  }

  ngOnInit() {
  }

}
