import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromRoomsPage from './rooms-page.reducer';
import * as fromRooms from './rooms.reducer';

import { RoomsApiActions } from '@app/rooms/actions';

export interface RoomsState {
	status: fromRooms.State;
	roomsPage: fromRoomsPage.State;
}

export interface State extends fromRoot.State {
	rooms: RoomsState;
}

export const reducers: ActionReducerMap<RoomsState, RoomsApiActions.RoomsApiActionsUnion> = {
	status: fromRooms.reducer,
	roomsPage: fromRoomsPage.reducer
};

export const selectRoomState = createFeatureSelector<State, RoomsState>('rooms');

export const selectRoomStatusState = createSelector(selectRoomState, (state: RoomsState) => state.status);
export const getRoomsError = createSelector(selectRoomStatusState, fromRooms.getError);
export const getRoomsPending = createSelector(selectRoomStatusState, fromRooms.getPending);

export const selectRoomsPageState = createSelector(selectRoomState, (state: RoomsState) => state.roomsPage);
export const getRooms = createSelector(selectRoomsPageState, fromRoomsPage.getRooms);
