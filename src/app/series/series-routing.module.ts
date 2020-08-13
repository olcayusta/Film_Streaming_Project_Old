import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TvSeriesComponent} from './tv-series.component';

const routes: Routes = [
  {path: '', component: TvSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
