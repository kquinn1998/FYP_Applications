import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordWorkoutPageRoutingModule } from './record-workout-routing.module';

import { RecordWorkoutPage } from './record-workout.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RecordWorkoutPageRoutingModule
  ],
  declarations: [RecordWorkoutPage]
})
export class RecordWorkoutPageModule {}
