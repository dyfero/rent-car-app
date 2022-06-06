import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _state = true;
  private _collapsed: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  set state(value: boolean) {
    this._state = value;
  }

  get state(): boolean {
    return this._state;
  }

  toggle(): void {
    this._state = !this._state;
    this._collapsed.next(this._state);
  }

  get(): Observable<boolean> {
    return this._collapsed.asObservable();
  }
}
