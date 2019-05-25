import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FeathersService } from '@app/core/services/feathers.service';
import { Credentials, User } from '@app/core/models';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private feathers: FeathersService) {}

	login({ email, password }: Credentials): Promise<any> {
		return this.feathers.authentication({ email, password, strategy: 'local' });
	}

	loginCheck(): Promise<any> {
		return this.feathers.authentication();
	}

	logout(): Promise<any> {
		return this.feathers.logout();
	}
}
