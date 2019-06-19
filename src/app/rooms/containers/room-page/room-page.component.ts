import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRooms from '@app/rooms/reducers';
import { RoomsPageActions } from '@app/rooms/actions';
import { Room } from '@core/models';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-room-page',
	templateUrl: './room-page.component.html',
	styleUrls: [ './room-page.component.scss' ]
})
export class RoomPageComponent implements OnInit {
	rooms: Observable<Room[]> = this.store.pipe(select(fromRooms.getRooms));
	pending$: Observable<boolean> = this.store.pipe(select(fromRooms.getRoomsPending));
	error$: Observable<any> = this.store.pipe(select(fromRooms.getRoomsError));

	constructor(private store: Store<fromRooms.State>) {}

	ngOnInit() {
		this.store.dispatch(RoomsPageActions.loadRooms());
	}
}
