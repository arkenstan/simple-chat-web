import { Action, createAction, union, props } from '@ngrx/store';

export const loadRooms = createAction('[Rooms/Page] Load Rooms');

const all = union({ loadRooms });

export type RoomsPageActionsUnion = typeof all;
