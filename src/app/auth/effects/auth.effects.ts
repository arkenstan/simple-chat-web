import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { LoginPageActions, AuthActions, AuthApiActions } from '@app/auth/actions';
import { Credentials } from '@app/core/models/users.model';
import { MatDialog } from '@angular/material';

@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private router: Router,
		private dialog: MatDialog
	) {}

	@Effect()
	loginCheck$ = this.actions$.pipe(
		ofType(AuthActions.loginCheck.type),
		switchMap(() => {
			return this.authService
				.loginCheck()
				.then((res) => {
					return AuthApiActions.loginSuccess({ user: res });
				})
				.catch((err) => AuthApiActions.loginFailure({ error: err }));
		})
	);

	@Effect()
	login$ = this.actions$.pipe(
		ofType(LoginPageActions.login.type),
		map((action: LoginPageActions.loginPageActionsUnion) => action.credentials),
		switchMap((auth: Credentials) => {
			return this.authService
				.login(auth)
				.then((res) => {
					return AuthApiActions.loginSuccess({ user: res });
				})
				.catch((err) => AuthApiActions.loginFailure({ error: err }));
		})
	);

	@Effect({ dispatch: false })
	loginSuccess$ = this.actions$.pipe(
		ofType(AuthApiActions.loginSuccess.type),
		tap(() => this.router.navigate([ '/' ]))
	);

	@Effect({ dispatch: false })
	loginRedirect$ = this.actions$.pipe(
		ofType(AuthApiActions.loginRedirect.type, AuthActions.logout.type),
		tap((authed) => {
			this.router.navigate([ 'login' ]);
		})
	);

	@Effect({ dispatch: false })
	logout$ = this.actions$.pipe(
		ofType(AuthActions.logout.type),
		switchMap(() => {
			return this.authService
				.logout()
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		})
	);
}
