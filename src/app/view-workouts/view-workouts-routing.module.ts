import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewWorkoutsPage } from './view-workouts.page';

const routes: Routes = [
  {
    path: '',
    component: ViewWorkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewWorkoutsPageRoutingModule {}
