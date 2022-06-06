import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentsComponent } from './rents/rents.component';

const routes: Routes = [
  {
    path: '',
    component: RentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }
