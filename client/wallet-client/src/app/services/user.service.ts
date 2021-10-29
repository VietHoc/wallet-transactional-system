import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) {}

  public login(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/sign_in`, payload);
  }

  public me(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/users/me`);
  }
}
