import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';

import * as fromChat from './chats.reducer';
import * as fromRoomsPage from './rooms-page.reducer';
import * as fromCreateRoom from './create-room.reducer';
import * as fromRoot from '@app/reducers';

export interface RoomState {
	room: fromChat.State;
	collection: fromRoomsPage.State;
	creation: fromCreateRoom.State;
}

export interface State extends fromRoot.State {
	rooms: RoomState;
}

export const reducers: ActionReducerMap<RoomState, any> = {
	creation: fromCreateRoom.reducer,
	collection: fromRoomsPage.reducer,
	room: fromChat.reducer
};

export const getRoomsState = createFeatureSelector<State, RoomState>('rooms');

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
