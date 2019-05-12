import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';




@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  login$ = this.actions$.pipe(ofType());

}
