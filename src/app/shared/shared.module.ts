import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	exports: [ CommonModule, MaterialModule, FormsModule, ReactiveFormsModule ]
})
export class SharedModule {}
