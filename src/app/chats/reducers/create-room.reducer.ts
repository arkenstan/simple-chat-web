import { CreateRoomActions, ChatActions } from '@app/chats/actions';

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
	action: CreateRoomActions.CreateRoomActionsUnion | ChatActions.ChatsActionsUnion
): State {
	switch (action.type) {
		case CreateRoomActions.CreateChat.type: {
			return { ...state, pending: true, error: null };
		}

		case ChatActions.CreateChatError.type: {
			return { ...state, pending: false, error: action.error };
		}

		default:
			return state;
	}
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
