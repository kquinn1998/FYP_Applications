import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseAnalysisPage } from './exercise-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseAnalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseAnalysisPageRoutingModule {}
