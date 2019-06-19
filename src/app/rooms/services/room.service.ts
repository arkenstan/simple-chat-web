import { Injectable } from '@angular/core';

import { FeathersService } from '@core/services/feathers.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RoomService {
	constructor(private feathers: FeathersService) {}

	getRooms(): Observable<any> {
		return this.feathers.service('rooms').watch().find({});
	}
}
