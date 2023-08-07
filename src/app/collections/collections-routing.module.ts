import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColectionsHomeComponent } from './colections-home/colections-home.component';

const routes: Routes = [
  { path: '', component: ColectionsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
