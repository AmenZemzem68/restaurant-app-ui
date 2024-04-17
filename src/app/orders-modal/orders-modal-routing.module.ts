import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersModalPage } from './orders-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersModalPageRoutingModule {}
