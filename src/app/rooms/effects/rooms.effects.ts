import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { RoomsApiActions, RoomsPageActions } from '@app/rooms/actions';
import { RoomService } from '@app/rooms/services/room.service';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RoomsEffects {
	constructor(private actions$: Actions, private roomService: RoomService) {}

	@Effect()
	getRooms$ = this.actions$.pipe(
		ofType(RoomsPageActions.loadRooms.type),
		exhaustMap(() => this.roomService.getRooms()),
		map((res) => RoomsApiActions.loadRoomsSuccess({ rooms: res.data })),
		catchError((error) => of(RoomsApiActions.loadRoomsFailure({ error })))
	);
}
