import { Action } from '@ngrx/store';

export enum LoginPageActionTypes {
  LoadLoginPages = '[LoginPage] Load LoginPages',
  
  
}

export class LoadLoginPages implements Action {
  readonly type = LoginPageActionTypes.LoadLoginPages;
}


export type LoginPageActions = LoadLoginPages;
