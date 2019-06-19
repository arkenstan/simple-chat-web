import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoomsMaterial } from '@shared/material/material.module';

import { RoomsRoutingModule } from './rooms-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { RoomsEffects } from './effects/rooms.effects';
import { RoomComponent } from './components/room/room.component';
import { RoomPageComponent } from './containers/room-page/room-page.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const COMPONENTS = [ RoomComponent, RoomPageComponent, MainContainerComponent ];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		SharedModule,
		RoomsMaterial,
		RoomsRoutingModule,
		StoreModule.forFeature('rooms', reducers),
		EffectsModule.forFeature([ RoomsEffects ])
	]
})
export class RoomsModule {}
