import { ChatActions } from '../actions';
import { Room } from '@app/core/models';

export interface State {
	rooms: Room[] | null;
}

export const initialState: State = {
	rooms: null
};

export function reducer(state = initialState, action: ChatActions.ChatsActionsUnion): State {
	switch (action.type) {
		case ChatActions.GetChatsSuccess.type: {
			return { ...state, rooms: action.rooms };
		}
		default:
			return state;
	}
}

export const selectRooms = (state: State) => state.rooms;
