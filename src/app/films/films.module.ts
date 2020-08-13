import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import {FilmsComponent} from './films.component';
import {MaterialModule} from '../material/material.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class FilmsModule { }
