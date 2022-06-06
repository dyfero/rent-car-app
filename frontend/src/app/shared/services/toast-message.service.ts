import { Injectable } from '@angular/core';
import { TranslocoService } from "@ngneat/transloco";
import { Message, MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(
    private _translocoService: TranslocoService,
    private _messageService: MessageService
  ) {
  }

  public clear(key?: string) {
    this._messageService.clear(key);
  }

  public add(message: Message) {
    this._messageService.add(message);
  }

  public addMessage(
    severity: 'error' | 'warn' | 'success',
    summary: string,
    details: string,
    sticky: boolean = false,
    life: number = 4000,
  ): void {
    this._messageService.add({
      severity: severity,
      summary: this._translocoService.translate(summary),
      detail: this._translocoService.translate(details),
      life: life,
      sticky: sticky,
    });
  }

  public addSuccess(
    details: string,
    sticky: boolean = false,
    life: number = 4000
  ): void {
    this.addMessage('success', 'action.success', details, sticky, life);
  }

  public addError(
    details: string,
    sticky: boolean = false,
    life: number = 4000
  ): void {
    this.addMessage('error', 'action.error', details, sticky, life);
  }

  public addWarning(
    details: string,
    sticky: boolean = false,
    life: number = 4000,
  ): void {
    this.addMessage('warn', 'action.warning', details, sticky, life);
  }
}
