import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import {TvSeriesComponent} from './tv-series.component';
import {MaterialModule} from '../material/material.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [TvSeriesComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SeriesModule { }
