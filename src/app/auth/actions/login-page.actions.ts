import { Credentials } from './../../core/models/users.model';
import { createAction, props, union } from '@ngrx/store';

export const login = createAction('[Login Page] Login', props<{ credentials: Credentials }>());

export type loginPageActionsUnion = ReturnType<typeof login>;
