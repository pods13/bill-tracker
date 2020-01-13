import {Directive, HostListener} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from '@firebase/app';
import '@firebase/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private fireAuth: AngularFireAuth) {
  }

  @HostListener('click')
  onClick() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.fireAuth.auth.signInWithPopup(googleAuthProvider);
  }

}
