import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  readonly baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) {}

  public getStocks(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/api/stocks`)
      .pipe(map((res: any) => res.stocks));
  }
}
