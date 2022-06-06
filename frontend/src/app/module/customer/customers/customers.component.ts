import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../shared/models/customer';
import { CustomerService } from '../../../shared/services/entity/customer.service';
import { TableUtil } from '../../../shared/utils/table.util';
import { ConfirmationService } from 'primeng/api';
import { TranslocoService } from '@ngneat/transloco';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends TableUtil<ICustomer> implements OnInit {
  constructor(
    protected _service: CustomerService,
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
