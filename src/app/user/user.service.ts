import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Meter, User} from './user.model';
import {catchError, concatMap, first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireAuth: AngularFireAuth, private db: AngularFirestore) {
  }

  isLoggedIn() {
    return this.fireAuth.authState.pipe(first());
  }

  saveMeters(meters: Meter[]) {
    return this.fireAuth.user.pipe(
      map(user => {
        if (user) {
          return this.db.collection('users').doc<User>(user.uid).set({meters});
        }
        throw new Error(`Only logged user can do this operation`);
      }),
      catchError(err => {
        // TODO show snackbar
        throw err;
      }));
  }

  getUserMeters() {
    return this.isLoggedIn().pipe(
      concatMap((user) => {
        if (user) {
          return this.db.collection<User>('users').doc<User>(user.uid)
            .get();
        }
        return null;
      })
    );
  }
}
