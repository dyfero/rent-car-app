import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer, ICustomer } from '../../../shared/models/customer';
import { FromUtil } from '../../../shared/utils/form.util';
import { CustomerService } from '../../../shared/services/entity/customer.service';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent extends FromUtil<ICustomer> implements OnInit {
  @Output()
  onSavedEmit = new EventEmitter<ICustomer>();

  constructor(
    protected _formBuilder: FormBuilder,
    protected _service: CustomerService,
    protected _toastMessageService: ToastMessageService
  ) {
    super(_formBuilder, _service, _toastMessageService);
  }

  ngOnInit(): void {
  }

  protected createFromForm(): ICustomer {
    return {
      ...new Customer(),
      id: this.form.get('id')?.value,
      first_name: this.form.get('first_name')?.value,
      last_name: this.form.get('last_name')?.value,
      city: this.form.get('city')?.value,
      postal_code: this.form.get('postal_code')?.value,
      street: this.form.get('street')?.value,
      street_number: this.form.get('street_number')?.value,
      flat_number: this.form.get('flat_number')?.value,
    }
  }

  protected initForm(object?: ICustomer): void {
    this.edit = !!object;

    this.form = this._formBuilder.group({
      id: [object?.id],
      first_name: [object?.first_name, [Validators.required]],
      last_name: [object?.last_name, [Validators.required]],
      city: [object?.city, [Validators.required]],
      postal_code: [object?.postal_code, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
      street: [object?.street, [Validators.required]],
      street_number: [object?.street_number, [Validators.required]],
      flat_number: [object?.flat_number],
    });
  }
}
