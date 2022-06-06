import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ICar } from '../../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService<ICar>{
  url = 'cars';

  constructor(protected http: HttpClient) {
    super(http)
  }
}
