import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { AppComponent } from './containers/app-component/app.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [ AppComponent, NotFoundComponent ];

@NgModule({
	declarations: COMPONENTS,
	imports: [ SharedModule, RouterModule ]
})
export class CoreModule {}
