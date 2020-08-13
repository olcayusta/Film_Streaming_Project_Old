import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import {LibraryComponent} from './library.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    MaterialModule
  ]
})
export class LibraryModule { }
