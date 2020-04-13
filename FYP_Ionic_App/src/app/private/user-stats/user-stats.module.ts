import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserStatsPageRoutingModule } from './user-stats-routing.module';

import { UserStatsPage } from './user-stats.page';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserStatsPageRoutingModule,
    ChartsModule
  ],
  declarations: [UserStatsPage]
})
export class UserStatsPageModule {}
