import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromChats from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ChatsEffects } from './effects/chats.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    StoreModule.forFeature('chats', fromChats.reducers, { metaReducers: fromChats.metaReducers }),
    EffectsModule.forFeature([ChatsEffects])
  ]
})
export class ChatsModule { }