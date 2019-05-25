import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '@app/auth/reducers';
import { LoginPageActions } from '@app/auth/actions';
import { Credentials } from '@app/core/models/users.model';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: [ './login-page.component.scss' ]
})
export class LoginPageComponent implements OnInit {
	pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
	error$ = this.store.pipe(select(fromAuth.getLoginPageError));

	constructor(private store: Store<fromAuth.State>) {}

	ngOnInit() {}

	onSubmit(credentials: Credentials) {
		this.store.dispatch(LoginPageActions.login({ credentials }));
	}
}
