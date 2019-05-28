import { createAction, props } from '@ngrx/store';
import { NewRoomData } from '@app/core/models';

export const CreateChat = createAction('[Chats] Create Chat Room', props<{ roomData: NewRoomData }>());

export type CreateRoomActionsUnion = ReturnType<typeof CreateChat>;
