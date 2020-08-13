import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleComponent } from './title.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    TitleRoutingModule,
    MaterialModule
  ]
})
export class TitleModule { }
