import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { SnackService } from '../services/snack.service';

export const authGuard: CanActivateFn = (route, state) => {
  const afAuth = inject(AngularFireAuth);
  const snackBar = inject(SnackService);

  return new Observable<boolean>(observer => {
    afAuth.authState.pipe(
      take(1),
      map(user => {
        const isLoggedIn = !!user;
        if (!isLoggedIn) {
          snackBar.authError();
        }
        observer.next(isLoggedIn);
        observer.complete();
      })
    ).subscribe();
  });
};
