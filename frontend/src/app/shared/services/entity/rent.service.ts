import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { IRent } from '../../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService extends BaseService<IRent>{
  url = 'rents';

  constructor(protected http: HttpClient) {
    super(http);
  }
}
