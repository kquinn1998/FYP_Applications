import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecordedWorkoutDetailsPage } from './view-recorded-workout-details.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ViewRecordedWorkoutDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,],
  exports: [RouterModule],
})
export class ViewRecordedWorkoutDetailsPageRoutingModule {}
