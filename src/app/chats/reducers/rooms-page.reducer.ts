import { RoomsPageActions, ChatActions } from '@app/chats/actions';

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
	action: RoomsPageActions.RoomsPageActionsUnion | ChatActions.ChatsActionsUnion
): State {
	switch (action.type) {
		case RoomsPageActions.GetChats.type: {
			return { ...state, pending: true, error: null };
		}

		case ChatActions.GetChatsSuccess.type: {
			return { ...state, pending: false, error: null };
		}

		case ChatActions.GetChatsError.type: {
			return { ...state, pending: false, error: action.error };
		}

		default:
			return state;
	}
}
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
