import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordWorkoutsViewPageRoutingModule } from './record-workouts-view-routing.module';

import { RecordWorkoutsViewPage } from './record-workouts-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordWorkoutsViewPageRoutingModule
  ],
  declarations: [RecordWorkoutsViewPage]
})
export class RecordWorkoutsViewPageModule {}
