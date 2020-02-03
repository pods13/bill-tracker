import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  getCurrentUser() {
    return this.fireAuth.authState.pipe(first());
  }
}
