import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export interface IBaseService<T> {
  find(id: number): Observable<HttpResponse<T>>;

  all(): Observable<HttpResponse<T[]>>;

  save(object: T): Observable<HttpResponse<T>>;

  update(object: T): Observable<HttpResponse<T>>;

  delete(id: number): Observable<HttpResponse<{}>>;
}
