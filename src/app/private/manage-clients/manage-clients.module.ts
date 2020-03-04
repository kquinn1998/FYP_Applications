import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageClientsPageRoutingModule } from './manage-clients-routing.module';

import { ManageClientsPage } from './manage-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageClientsPageRoutingModule
  ],
  declarations: [ManageClientsPage]
})
export class ManageClientsPageModule {}
