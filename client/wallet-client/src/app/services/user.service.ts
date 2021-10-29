import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.models';
import {map} from 'rxjs/operators';

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

  public searchUsers(query: string): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}/api/users/search?query=${query}`)
      .pipe(map((res: any) => res.users));
  }
}
