import { NgModule } from '@angular/core';
import {
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatToolbarModule,
	MatMenuModule
} from '@angular/material';

@NgModule({
	exports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule ]
})
export class MaterialModule {}

@NgModule({
	exports: [ MatCardModule ]
})
export class AuthMaterialModule {}

@NgModule({
	exports: [ MatCardModule ]
})
export class RoomsMaterial {}
