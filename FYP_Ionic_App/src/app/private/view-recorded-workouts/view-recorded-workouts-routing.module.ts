import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecordedWorkoutsPage } from './view-recorded-workouts.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRecordedWorkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRecordedWorkoutsPageRoutingModule {}
