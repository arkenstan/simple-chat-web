import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ChatsService } from '@app/chats/services/chats.service';
import { ChatActions } from '../actions';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

@Injectable()
export class ChatsEffects {
	constructor(private actions$: Actions, private chatService: ChatsService) {}

	@Effect()
	getChats$ = this.actions$.pipe(
		ofType(ChatActions.GetChats.type),
		map((action: ChatActions.ChatsActionsUnion) => action.userId),
		exhaustMap((userId: string) => this.chatService.getRooms(userId)),
		map((res) => ChatActions.GetChatsSuccess({ rooms: res.data })),
		catchError((err) => of(ChatActions.GetChatsError({ error: err })))
	);
}
