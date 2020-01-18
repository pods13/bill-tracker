import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(public fireAuth: AngularFireAuth,
              private router: Router) {
  }

  onUserSigned() {
    this.router.navigate(['/'])
      .catch(console.error);
  }
}
