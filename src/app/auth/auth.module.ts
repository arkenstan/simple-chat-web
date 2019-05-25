import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AuthMaterialModule } from '@app/shared/material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatDialogModule } from '@angular/material';

const COMPONENTS = [ LoginPageComponent, LoginFormComponent ];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		SharedModule,
		AuthMaterialModule,
		AuthRoutingModule,
		MatDialogModule,
		StoreModule.forFeature('auth', reducers),
		EffectsModule.forFeature([ AuthEffects ])
	]
})
export class AuthModule {}
