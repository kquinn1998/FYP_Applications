import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewWorkoutDetailsPage } from './view-workout-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewWorkoutDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewWorkoutDetailsPageRoutingModule {}
