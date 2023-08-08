import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { ColectionsHomeComponent } from './colections-home/colections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ColectionsHomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CollectionsModule { }
