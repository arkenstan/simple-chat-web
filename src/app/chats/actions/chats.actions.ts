import { createAction, props } from '@ngrx/store';
import { Room, NewRoomData } from '@app/core/models';

export const GetChats = createAction('[Chats] Get Chats List', props<{ userId: string }>());
export const GetChatsSuccess = createAction('[Chats] Get Chats List Success', props<{ rooms: Room[] }>());
export const GetChatsError = createAction('[Chats] Get Chats List Error', props<{ error: any }>());

export const CreateChat = createAction('[Chats] Create Chat Room', props<{ roomData: NewRoomData }>());
export const CreateChatError = createAction('[Chats] Create Chat Room Error', props<{ error: any }>());

export type ChatsActionsUnion = ReturnType<
	typeof GetChats | typeof GetChatsSuccess | typeof GetChatsError | typeof CreateChat | typeof CreateChatError
>;
