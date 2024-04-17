import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FramePageRoutingModule } from './frame-routing.module';
import { FramePage } from './frame.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FramePageRoutingModule
  ],
  declarations: [FramePage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class FramePageModule {}
