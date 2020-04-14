import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageClientDashboardPage } from './manage-client-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ManageClientDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageClientDashboardPageRoutingModule {}
