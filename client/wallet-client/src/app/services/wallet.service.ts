import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  readonly baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) {}

  public deposit(amount: number, description: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/deposit`, {
      transactions: {
        amount,
        description,
      },
    });
  }

  public withdraw(amount: number, description: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/withdraw`, {
      transactions: {
        amount,
        description,
      },
    });
  }

  public transfer(
    toWalletId: number,
    amount: number,
    description: string
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/transfer`, {
      transactions: {
        to_wallet_id: toWalletId,
        amount,
        description,
      },
    });
  }
}
