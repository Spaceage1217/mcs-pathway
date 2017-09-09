import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';// for svg icons

import {
  PathwayListComponent,
  PathwayTaskComponent
} from './pathway-helpers';

import{
  IconComponent,
} from './icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AngularSvgIconModule
  ],
  declarations: [
    PathwayListComponent,
    PathwayTaskComponent,
    IconComponent,

  ],
  exports: [
    AngularSvgIconModule,
    CommonModule,
    IconComponent,
    PathwayListComponent,
    PathwayTaskComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
  ]
})
export class SharedModule {}
