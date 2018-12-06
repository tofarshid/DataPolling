import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from '../app-routing.module';

import {
    MatFormFieldModule, MatInputModule, MatIconModule, MatBadgeModule, MatCardModule
 } from '@angular/material';
import { PollingComponent } from './polling/polling.component';

@NgModule({
  declarations: [
  	PollingComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule

  ],
  exports: [
  	PollingComponent],
})
export class NgProfileModule { }