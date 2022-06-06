import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarsComponent } from './cars/cars.component';
import { TableModule } from 'primeng/table';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { CarFormComponent } from './car-form/car-form.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarsComponent,
    CarFormComponent
  ],
    imports: [
        CommonModule,
        CarRoutingModule,
        TableModule,
        NgbDropdownModule,
        SharedModule,
        DialogModule,
        ReactiveFormsModule
    ]
})
export class CarModule { }
