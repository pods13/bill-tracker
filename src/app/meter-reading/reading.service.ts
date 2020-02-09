import {UserService} from '../user/user.service';
import {concatMap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {Reading} from './reading.model';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  constructor(private userService: UserService, private db: AngularFirestore) {
  }

  getReadings() {
    return this.userService.getCurrentUser().pipe(
      concatMap((user) => {
        if (user) {
          return this.db.collection<Reading>('readings',
            (ref) => ref.where('uid', '==', user.uid)
              .orderBy('readDate', 'desc'))
            .valueChanges();
        }
        return [];
      }));
  }

}
