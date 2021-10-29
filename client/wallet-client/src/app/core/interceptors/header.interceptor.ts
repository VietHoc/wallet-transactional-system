import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpClient,
} from '@angular/common/http';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newHeaders = req.headers;
    if (!newHeaders.has('Content-Type')) {
      newHeaders = newHeaders.append(
        'Content-Type',
        'application/json, text/plain, */*'
      );
    }
    if (!newHeaders.has('Accept')) {
      newHeaders = newHeaders.append('Accept', 'application/json');
    }
    newHeaders = newHeaders.append(
      'Authorization',
      String(localStorage.getItem('token'))
    );
    const authReq = req.clone({headers: newHeaders});

    return next.handle(authReq);
  }
}
