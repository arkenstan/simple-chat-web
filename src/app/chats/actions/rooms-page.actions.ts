import { createAction, props } from '@ngrx/store';

export const GetChats = createAction('[Chats] Get Chats List', props<{ userId: string }>());

export type RoomsPageActionsUnion = ReturnType<typeof GetChats>;
