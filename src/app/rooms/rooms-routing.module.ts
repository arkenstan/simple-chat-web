import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomPageComponent } from './containers/room-page/room-page.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainContainerComponent,
		children: [
			{ path: ':id', component: RoomPageComponent },
			{ path: '', component: RoomPageComponent, pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class RoomsRoutingModule {}
