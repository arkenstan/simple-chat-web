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

	@Effect() loginCheck$ = this.actions$.pipe(ofType(AuthActions.loginCheck.type));

	@Effect()
	login$ = this.actions$.pipe(
		ofType(LoginPageActions.login.type),
		map((action: LoginPageActions.loginPageActionsUnion) => action.credentials),
		switchMap((auth: Credentials) => {
			return this.authService
				.login(auth)
				.then((res) => {
					console.log(res);
					return AuthApiActions.loginSuccess({ user: res });
				})
				.catch((err) => AuthApiActions.loginFailure(err));
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
			console.log('TCL: AuthEffects -> authed', authed);
			this.router.navigate([ 'login' ]);
		})
	);
}
