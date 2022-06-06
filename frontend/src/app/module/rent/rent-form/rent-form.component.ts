import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FromUtil } from '../../../shared/utils/form.util';
import { IRent, Rent } from '../../../shared/models/rent';
import { FormBuilder, Validators } from '@angular/forms';
import { RentService } from '../../../shared/services/entity/rent.service';
import { ICustomer } from '../../../shared/models/customer';
import { CustomerService } from '../../../shared/services/entity/customer.service';
import { CarService } from '../../../shared/services/entity/car.service';
import { ICar } from '../../../shared/models/car';
import * as moment from 'moment';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.scss']
})
export class RentFormComponent extends FromUtil<IRent> implements OnInit {

  @Output()
  onSavedEmit = new EventEmitter<IRent>();
  customers: ICustomer[] = [];
  cars: ICar[] = [];

  constructor(
    protected _formBuilder: FormBuilder,
    protected _service: RentService,
    protected _customerService: CustomerService,
    protected _carService: CarService,
    protected _toastMessageService: ToastMessageService
  ) {
    super(_formBuilder, _service, _toastMessageService);
  }

  ngOnInit(): void {
    this._customerService.all().subscribe(res => {
      this.customers = res.body ?? [];
    });

    this._carService.all().subscribe(res => {
      this.cars = res.body ?? [];
    })
  }

  getCustomer(id?: number): ICustomer | null {
    if (!id) return null;
    return this.customers.find((customer) => customer.id == id) ?? null;
  }

  getCar(id?: number): ICar | null {
    if (!id) return null;
    return this.cars.find((car) => car.id == id) ?? null;
  }

  onDateChange(): void {
    console.log('change')
    if (this.form.get('car')?.value && this.form.get('start_date')?.value && this.form.get('end_date')?.value) {
      let car = this.getCar(this.form.get('car')?.value.id);
      let start_date = this.form.get('start_date')?.value;
      let end_date = this.form.get('end_date')?.value;

      let difference = end_date.getTime() - start_date.getTime();
      let days = Math.ceil(difference / (1000 * 3600 * 24));

      this.form.controls['price'].setValue((car?.price_per_day ?? 0) * ++days);
    }
  }

  protected createFromForm(): IRent {
    return {
      ...new Rent(),
      id: this.form.get('id')?.value,
      customer: this.form.get('customer')?.value.id,
      car: this.form.get('car')?.value.id,
      start_date: moment(this.form.get('start_date')?.value).hours(2).toDate(),
      end_date: moment(this.form.get('end_date')?.value).hours(2).toDate(),
      price: this.form.get('price')?.value,
    }
  }

  protected initForm(object?: IRent): void {
    this.edit = !!object;

    this.form = this._formBuilder.group({
      id: [object?.id],
      customer: [this.getCustomer(object?.customer), [Validators.required]],
      car: [this.getCar(object?.car), [Validators.required]],
      start_date: [object?.start_date ? new Date(object?.start_date) : null, [Validators.required]],
      end_date: [object?.end_date ? new Date(object?.end_date) : null, [Validators.required]],
      price: [object?.price, [Validators.required]],
    });
  }
}
