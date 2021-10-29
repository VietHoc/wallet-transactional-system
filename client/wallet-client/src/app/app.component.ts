import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'wallet-client';

  public logOut(): void {
    localStorage.clear();
  }

  public get isLoginPage(): boolean {
    return window.location.href.includes('login');
  }
}
