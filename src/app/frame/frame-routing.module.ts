import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FramePage } from './frame.page';

const routes: Routes = [
  {
    path: '',
    component: FramePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FramePageRoutingModule {}
