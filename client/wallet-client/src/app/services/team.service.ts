import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  readonly baseUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) {}

  public getTeams(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/api/teams`)
      .pipe(map((res: any) => res.teams));
  }
}
