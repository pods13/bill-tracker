import {catchError, concatMap, first, map} from 'rxjs/operators';
import {Meter} from './meter.model';
import {UserService} from '../user/user.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MeterService {

  constructor(private userService: UserService, private db: AngularFirestore) {
  }

  getMeters() {
    return this.userService.getCurrentUser().pipe(
      concatMap((user) => {
        if (user) {
          return this.db.collection<Meter>('meters',
            (ref) => ref.where('uid', '==', user.uid))
            .valueChanges();
        }
        return [];
      }));
  }

  saveMeters(meters: Meter[]) {
    return this.userService.getCurrentUser().pipe(
      map(user => {
        if (user) {
          const batch = this.db.firestore.batch();
          meters.forEach(meter => {
            const meterDoc = this.db.firestore.collection('meters').doc();
            batch.set(meterDoc, Object.assign({}, meter, {uid: user.uid}));
          });
          return batch.commit();
        }
        throw new Error(`Only logged user can do this operation`);
      }),
      catchError(err => {
        // TODO show snackbar
        throw err;
      }));
  }
}
