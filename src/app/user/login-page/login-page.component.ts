import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject<void>();

  constructor(public fireAuth: AngularFireAuth,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fireAuth.authState.pipe(takeUntil(this.unsubscribe$))
      .subscribe(user => {
        if (user) {
          return this.onUserSigned();
        }
      });
  }

  onUserSigned() {
    this.router.navigate(['/readings'])
      .catch(console.error);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
