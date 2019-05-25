import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { CoreModule } from '@app/core/core.module';
import { AuthModule } from '@app/auth/auth.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AuthModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		// StoreRouterConnectingModule.forRoot(),
		!environment.production ? StoreDevtoolsModule.instrument({ name: 'NgRx Chat App' }) : [],
		EffectsModule.forRoot([ AppEffects ]),
		CoreModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
