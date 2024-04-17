import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersModalPageRoutingModule } from './orders-modal-routing.module';

import { OrdersModalPage } from './orders-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersModalPageRoutingModule
  ],
  declarations: [OrdersModalPage]
})
export class OrdersModalPageModule {}
