import { Output, EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { BaseService } from '../services/entity/base.service';
import { ToastMessageService } from '../services/toast-message.service';

@Injectable({
  providedIn: 'root'
})
export abstract class FromUtil<T> {
  @Output()
  onSavedEmit = new EventEmitter<T>();

  form: FormGroup = this._formBuilder.group({});
  edit: boolean = false;
  visible: boolean = false;

  protected constructor(
    protected _formBuilder: FormBuilder,
    protected _service: BaseService<T>,
    protected _toastMessageService: ToastMessageService
  ) {}

  get fc(): any {
    return this.form.controls;
  }

  open(object?: T): void {
    this.initForm(object);
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
  }

  submit(): void {
    if (!this.form.invalid) {
      const object = this.createFromForm();
      this.edit ? this.update(object) : this.save(object);
    }
  }

  private save(object: T): void {
    this.form.disable();

    this._service
      .save(object)
      .pipe(finalize(() => this.form.enable()))
      .subscribe(
        res => this.afterSave(res.body),
        () => this._toastMessageService.addError("error.500")
      );
  }

  private update(object: T): void {
    this.form.disable();

    this._service
      .update(object)
      .pipe(finalize(() => this.form.enable()))
      .subscribe(
        res => this.afterSave(res.body),
        () => this._toastMessageService.addError("error.500")
      );
  }

  private afterSave(data: any): void {
    this.onSavedEmit.emit(data.body);
    this._toastMessageService.addSuccess("success.create")
    this.hide();
  }

  protected abstract initForm(object?: T): void;

  protected abstract createFromForm(): T;
}
