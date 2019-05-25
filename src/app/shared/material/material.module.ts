import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
	exports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule ]
})
export class MaterialModule {}

@NgModule({
	exports: [ MatCardModule ]
})
export class AuthMaterialModule {}
