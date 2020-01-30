import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWorkoutsPageRoutingModule } from './view-workouts-routing.module';

import { ViewWorkoutsPage } from './view-workouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewWorkoutsPageRoutingModule
  ],
  declarations: [ViewWorkoutsPage]
})
export class ViewWorkoutsPageModule {}
