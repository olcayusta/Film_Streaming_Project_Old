import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatshotRoutingModule } from './whatshot-routing.module';
import {WhatshotComponent} from './whatshot.component';

@NgModule({
  declarations: [
    WhatshotComponent
  ],
  imports: [
    CommonModule,
    WhatshotRoutingModule
  ]
})
export class WhatshotModule { }
