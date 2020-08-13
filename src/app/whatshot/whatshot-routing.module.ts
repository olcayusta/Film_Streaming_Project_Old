import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WhatshotComponent} from './whatshot.component';

const routes: Routes = [
  {path: '', component: WhatshotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatshotRoutingModule { }
