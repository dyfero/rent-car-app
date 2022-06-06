import { Component, OnInit } from '@angular/core';
import { IRent } from '../../../shared/models/rent';
import { RentService } from '../../../shared/services/entity/rent.service';
import { TableUtil } from '../../../shared/utils/table.util';
import { ConfirmationService } from 'primeng/api';
import { TranslocoService } from '@ngneat/transloco';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent extends TableUtil<IRent> implements OnInit {
  data: IRent[] = [];

  constructor(
    protected _service: RentService,
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
