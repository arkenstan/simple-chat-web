import { Action } from '@ngrx/store';

import { RoomsApiActions } from '@app/rooms/actions';
import { Room } from '@core/models';

export interface State {
	rooms: Room[] | null;
}
export const initialState: State = {
	rooms: null
};

export function reducer(state = initialState, action: RoomsApiActions.RoomsApiActionsUnion): State {
	switch (action.type) {
		case RoomsApiActions.loadRoomsSuccess.type: {
			return { ...state, rooms: action.rooms };
		}

		default:
			return state;
	}
}

export const getRooms = (state: State) => state.rooms;
