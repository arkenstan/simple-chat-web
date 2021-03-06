import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthApiActions } from '@app/auth/actions';
import * as fromAuth from '@app/auth/reducers';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private store: Store<fromAuth.State>) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(fromAuth.getLoggedIn),
			map((authed) => {
				if (!authed) {
					this.store.dispatch(AuthApiActions.loginRedirect());
					return false;
				}
				return true;
			}),
			take(1)
		);
	}
}
