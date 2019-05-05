import { props, createAction } from '@ngrx/store';

export enum AuthApiActionTypes {
  LoadAuthApis = '[AuthApi] Load AuthApis',
  
  
}

export class LoadAuthApis implements Action {
  readonly type = AuthApiActionTypes.LoadAuthApis;
}


export type AuthApiActions = LoadAuthApis;
