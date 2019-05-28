import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ChatsService } from '@app/chats/services/chats.service';
import { ChatActions, RoomsPageActions, CreateRoomActions } from '../actions';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class ChatsEffects {
	constructor(private actions$: Actions, private chatService: ChatsService) {}

	@Effect()
	getChats$ = this.actions$.pipe(
		ofType(RoomsPageActions.GetChats.type),
		exhaustMap(({ userId }) => this.chatService.getRooms(userId)),
		map((res) => ChatActions.GetChatsSuccess({ rooms: res.data })),
		catchError((err) => of(ChatActions.GetChatsError({ error: err })))
	);

	@Effect()
	createRoom$ = this.actions$.pipe(
		ofType(CreateRoomActions.CreateChat.type),
		map((action: CreateRoomActions.CreateRoomActionsUnion) => action.roomData),
		switchMap((roomData) => {
			return this.chatService
				.createRoom(roomData)
				.then()
				.catch((error) => ChatActions.CreateChatError({ error }));
		})
	);
}
