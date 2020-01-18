import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from '@firebase/app';
import '@firebase/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  @Output() signed = new EventEmitter();

  constructor(private fireAuth: AngularFireAuth) {
  }

  @HostListener('click')
  onClick() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.fireAuth.auth.signInWithPopup(googleAuthProvider)
      .catch(console.error)
      .then(() => this.signed.emit());
  }
}
