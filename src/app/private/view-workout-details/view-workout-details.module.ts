import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWorkoutDetailsPageRoutingModule } from './view-workout-details-routing.module';

import { ViewWorkoutDetailsPage } from './view-workout-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ViewWorkoutDetailsPageRoutingModule
  ],
  declarations: [ViewWorkoutDetailsPage]
})
export class ViewWorkoutDetailsPageModule {}
