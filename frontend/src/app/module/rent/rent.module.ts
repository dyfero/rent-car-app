import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRoutingModule } from './rent-routing.module';
import { RentsComponent } from './rents/rents.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RentFormComponent } from './rent-form/rent-form.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    RentsComponent,
    RentFormComponent
  ],
    imports: [
        CommonModule,
        RentRoutingModule,
        TableModule,
        SharedModule,
        NgbDropdownModule,
        DialogModule,
        ReactiveFormsModule,
        DropdownModule,
        CalendarModule
    ]
})
export class RentModule { }
