import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {SnackService} from '../services/snack.service';
import {map, take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private fireAuth: AngularFireAuth, private snackService: SnackService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.fireAuth.user.pipe(
      tap(user => user ? null : this.snackService.showAuthError()),
      map(user => {
        return !!user;
      }),
      take(1)
    );
  }
}
