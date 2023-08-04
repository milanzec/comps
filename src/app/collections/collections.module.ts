import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { ColectionsHomeComponent } from './colections-home/colections-home.component';


@NgModule({
  declarations: [
    ColectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: [ColectionsHomeComponent]
})
export class CollectionsModule { }
