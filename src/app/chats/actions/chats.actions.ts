import { createAction, props } from '@ngrx/store';
import { Room, NewRoomData } from '@app/core/models';

export const GetChatsSuccess = createAction('[Chats] Get Chats List Success', props<{ rooms: Room[] }>());
export const GetChatsError = createAction('[Chats] Get Chats List Error', props<{ error: any }>());

export const CreateChatError = createAction('[Chats] Create Chat Room Error', props<{ error: any }>());

export type ChatsActionsUnion = ReturnType<
	typeof GetChatsSuccess | typeof GetChatsError | typeof CreateChat | typeof CreateChatError
>;
