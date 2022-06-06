import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id?: number }> {
  protected url: string = '';

  protected constructor(protected _http: HttpClient) {
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this._http.delete(`${this.url}/${id}`, {observe: 'response'});
  }

  find(id: number): Observable<HttpResponse<T>> {
    return this._http.get<T>(`${this.url}/${id}`, {observe: 'response'});
  }

  all(): Observable<HttpResponse<T[]>> {
    return this._http.get<T[]>(this.url, {observe: 'response'});
  }

  save(object: T): Observable<HttpResponse<T>> {
    return this._http.post<T>(this.url, object, {observe: 'response'});
  }

  update(object: T): Observable<HttpResponse<T>> {
    return this._http.patch<T>(`${this.url}/${object.id}`, object, {observe: 'response'});
  }
}
