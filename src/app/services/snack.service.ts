import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {finalize, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  showAuthError() {
    this.snackBar.open(`You must be logged in`, 'OK', {duration: 5000});

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(tap(() => this.router.navigate(['/login'])))
      .subscribe();
  }
}
