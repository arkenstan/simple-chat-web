import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';
import * as fromRouter from '@ngrx/router-store';



export interface State {
	router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
	router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
