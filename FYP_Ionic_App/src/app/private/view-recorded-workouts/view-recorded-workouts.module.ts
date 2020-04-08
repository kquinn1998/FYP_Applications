import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRecordedWorkoutsPageRoutingModule } from './view-recorded-workouts-routing.module';

import { ViewRecordedWorkoutsPage } from './view-recorded-workouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRecordedWorkoutsPageRoutingModule
  ],
  declarations: [ViewRecordedWorkoutsPage]
})
export class ViewRecordedWorkoutsPageModule {}
