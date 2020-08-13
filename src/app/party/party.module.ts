import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './party.component';
import { PartyPlayerComponent } from './party-player/party-player.component';
import {ObserversModule} from '@angular/cdk/observers';

@NgModule({
  declarations: [PartyComponent, PartyPlayerComponent],
  imports: [
    CommonModule,
    PartyRoutingModule,
    ObserversModule
  ]
})
export class PartyModule { }
