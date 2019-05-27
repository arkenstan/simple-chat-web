import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FeathersService } from '@app/core/services/feathers.service';
import { Room } from '@app/core/models';

@Injectable({
	providedIn: 'root'
})
export class ChatsService {
	constructor(private feathers: FeathersService) {}

	getRooms(userId: string): Observable<any> {
		return (<any>this.feathers.service('rooms')).watch().find({ createdBy: userId, 'members.userId': userId });
	}
}
