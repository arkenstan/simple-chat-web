import { Component, OnInit } from '@angular/core';
import { AuthActions } from '@app/auth/actions';
import { Store } from '@ngrx/store';
import * as fromAuth from '@app/auth/reducers';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	title = 'simple-chat-web';

	constructor(private store: Store<fromAuth.AuthState>) {}

	ngOnInit() {
		this.store.dispatch(AuthActions.loginCheck());
	}
}
