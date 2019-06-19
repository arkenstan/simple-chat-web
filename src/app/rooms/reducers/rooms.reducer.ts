import { Action } from '@ngrx/store';
import { RoomsApiActions, RoomsPageActions } from '@app/rooms/actions';

export interface State {
	error: any | null;
	pending: boolean;
}

export const initialState: State = {
	error: null,
	pending: false
};

export function reducer(
	state = initialState,
	action: RoomsApiActions.RoomsApiActionsUnion | RoomsPageActions.RoomsPageActionsUnion
): State {
	switch (action.type) {
		case RoomsPageActions.loadRooms.type: {
			return { ...state, pending: true, error: null };
		}

		case RoomsApiActions.loadRoomsSuccess.type: {
			return { ...state, pending: false, error: null };
		}

		case RoomsApiActions.loadRoomsFailure.type: {
			return { ...state, pending: true, error: action.error };
		}

		default:
			return state;
	}
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
