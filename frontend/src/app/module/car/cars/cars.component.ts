import { Component, OnInit } from '@angular/core';
import { ICar } from '../../../shared/models/car';
import { CarService } from '../../../shared/services/entity/car.service';
import { TableUtil } from '../../../shared/utils/table.util';
import { ConfirmationService } from 'primeng/api';
import { TranslocoService } from '@ngneat/transloco';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent extends TableUtil<ICar> implements OnInit {
  data: ICar[] = [];

  constructor(
    protected _service: CarService,
    protected _confirmationService: ConfirmationService,
    protected _translocoService: TranslocoService,
    protected _toastMessageService: ToastMessageService
  ) {
    super(_service, _confirmationService, _translocoService, _toastMessageService);
  }

  ngOnInit(): void {
    this.getData();
  }
}
