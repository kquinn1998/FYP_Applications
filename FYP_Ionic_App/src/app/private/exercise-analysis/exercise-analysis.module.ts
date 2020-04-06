import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseAnalysisPageRoutingModule } from './exercise-analysis-routing.module';

import { ExerciseAnalysisPage } from './exercise-analysis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseAnalysisPageRoutingModule
  ],
  declarations: [ExerciseAnalysisPage]
})
export class ExerciseAnalysisPageModule {}
