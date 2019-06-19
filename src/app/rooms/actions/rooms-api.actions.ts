import { Action, createAction, props, union } from '@ngrx/store';
import { Room } from '@core/models';

export const loadRoomsSuccess = createAction('[Rooms/API] Load Rooms Success', props<{ rooms: Room[] }>());
export const loadRoomsFailure = createAction('[Rooms/API] Load Rooms Failure', props<{ error: any }>());

const all = union({ loadRoomsSuccess, loadRoomsFailure });

export type RoomsApiActionsUnion = typeof all;
