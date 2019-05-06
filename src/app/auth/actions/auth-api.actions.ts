import { props, createAction } from '@ngrx/store';
import { User } from '@app/core/models';

export const loginSuccess = createAction('[Auth/API] Login Success', props<{ user: User }>());

export const loginFailure = createAction('[Auth/API] Login Failure', props<{ error: any }>());

export const loginRedirect = createAction('[Auth/API] Login Redirect');

export type AuthApiActionsUnion = ReturnType<typeof loginSuccess | typeof loginFailure | typeof loginRedirect>;
