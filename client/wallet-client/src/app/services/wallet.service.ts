import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Wallet} from '../models/wallet.model';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  readonly baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) {}

  public deposit(
    amount: number,
    description: string,
    from_wallet_id?: number,
    to_wallet_id?: number
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/deposit`, {
      transactions: {
        amount,
        description,
        from_wallet_id,
        to_wallet_id,
      },
    });
  }

  public withdraw(
    amount: number,
    description: string,
    from_wallet_id?: number,
    to_wallet_id?: number
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/withdraw`, {
      transactions: {
        amount,
        description,
        from_wallet_id,
        to_wallet_id,
      },
    });
  }

  public transfer(
    toWalletId: number,
    amount: number,
    description: string,
    from_wallet_id?: string
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/transfer`, {
      transactions: {
        to_wallet_id: toWalletId,
        amount,
        description,
        from_wallet_id,
      },
    });
  }

  public searchWallets(address: string): Observable<Wallet[]> {
    return this.http
      .get<Wallet[]>(`${this.baseUrl}/api/wallets/search?query=${address}`)
      .pipe(map((response: any) => response.wallets));
  }
}
