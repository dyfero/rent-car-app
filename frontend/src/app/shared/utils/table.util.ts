import { BaseService } from '../services/entity/base.service';
import { ConfirmationService } from 'primeng/api';
import { CONFIRMATION_MODAL_KEY } from '../constants/app.constants';
import { TranslocoService } from '@ngneat/transloco';
import { ToastMessageService } from '../services/toast-message.service';

export class TableUtil<T extends {id?: number}> {
  data: T[] = [];

  protected constructor(
    protected _service: BaseService<T>,
    protected _confirmationService: ConfirmationService,
    protected _translocoService: TranslocoService,
    protected _toastMessageService: ToastMessageService
  ) {}

  getData() {
    this._service.all().subscribe(res => this.data = res.body ?? []);
  }

  delete(object?: T) {
      this._confirmationService.confirm({
      key: CONFIRMATION_MODAL_KEY,
      header: this._translocoService.translate('form.delete.title'),
      message: this._translocoService.translate('form.delete.question', { name: object?.id }),
      accept: () => {
        if (object?.id == null) return;
        this._service.delete(object.id).subscribe(
          () => {
            this.getData();
            this._toastMessageService.addSuccess("success.delete")
          },
          () => this._toastMessageService.addError("error.500"));
      },
      acceptLabel: this._translocoService.translate('action.confirm'),
      rejectLabel: this._translocoService.translate('action.cancel')
    });
  }
}
