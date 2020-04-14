import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageClientDashboardPageRoutingModule } from './manage-client-dashboard-routing.module';

import { ManageClientDashboardPage } from './manage-client-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageClientDashboardPageRoutingModule
  ],
  declarations: [ManageClientDashboardPage]
})
export class ManageClientDashboardPageModule {}
