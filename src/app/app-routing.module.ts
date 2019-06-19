import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/auth/services/auth.guard';
import { NotFoundComponent } from '@app/core/containers/not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'rooms', pathMatch: 'full' },
	{ path: 'rooms', loadChildren: '@app/rooms/rooms.module#RoomsModule', canActivate: [ AuthGuard ] },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
