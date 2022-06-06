import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ICustomer } from '../../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<ICustomer>{
  url = 'customers';

  constructor(protected http: HttpClient) {
    super(http);
  }
}
