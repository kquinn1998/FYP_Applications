import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordWorkoutPage } from './record-workout.page';

const routes: Routes = [
  {
    path: '',
    component: RecordWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordWorkoutPageRoutingModule {}
