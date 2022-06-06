import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FromUtil } from '../../../shared/utils/form.util';
import { Car, ICar } from '../../../shared/models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../../shared/services/entity/car.service';
import { ToastMessageService } from '../../../shared/services/toast-message.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent extends FromUtil<ICar> implements OnInit {
  @Output()
  onSavedEmit = new EventEmitter<ICar>();

  constructor(
    protected _formBuilder: FormBuilder,
    protected _service: CarService,
    protected _toastMessageService: ToastMessageService
  ) {
    super(_formBuilder, _service, _toastMessageService);
  }

  ngOnInit(): void {
  }

  protected createFromForm(): ICar {
    return {
      ...new Car(),
      id: this.form.get('id')?.value,
      brand: this.form.get('brand')?.value,
      model: this.form.get('model')?.value,
      manufacture_year: this.form.get('manufacture_year')?.value,
      engine_power: this.form.get('engine_power')?.value,
      fuel_type: this.form.get('fuel_type')?.value,
      price_per_day: this.form.get('price_per_day')?.value,
    }
  }

  protected initForm(object?: ICar): void {
    this.edit = !!object;

    this.form = this._formBuilder.group({
      id: [object?.id],
      brand: [object?.brand, [Validators.required]],
      model: [object?.model, [Validators.required]],
      manufacture_year: [object?.manufacture_year, [Validators.required]],
      engine_power: [object?.engine_power, [Validators.required]],
      fuel_type: [object?.fuel_type, [Validators.required]],
      price_per_day: [object?.price_per_day, [Validators.required]],
    });
  }
}
