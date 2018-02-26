import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {LoginErrorStateMatcher} from '../login-form/login-form.component';

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

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(30),
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  ]);

  matcher = new LoginErrorStateMatcher();

  @Input() public isPanelOpen;
  @Output() public toggleEvent = new EventEmitter();

  togglePanel() {
    this.toggleEvent.emit(this.isPanelOpen);
  }

  constructor() { }

  ngOnInit() {
  }

}
