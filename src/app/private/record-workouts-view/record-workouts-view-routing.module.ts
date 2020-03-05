import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordWorkoutsViewPage } from './record-workouts-view.page';

const routes: Routes = [
  {
    path: '',
    component: RecordWorkoutsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordWorkoutsViewPageRoutingModule {}
