import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public isLoginPanelOpen = true;
  public isRegistrationPanelOpen = false;

  toggleLogin(isPanelOpen) {
    this.isLoginPanelOpen = !isPanelOpen;
    if (this.isLoginPanelOpen) {
      this.isRegistrationPanelOpen = false;
    }
  }

  toggleRegistration(isPanelOpen) {
    this.isRegistrationPanelOpen = !isPanelOpen;
    if (this.isRegistrationPanelOpen) {
      this.isLoginPanelOpen = false;
    }
  }

  constructor() {}
}
