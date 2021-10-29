import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map, finalize} from 'rxjs/operators';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import {environment} from 'src/environments/environment';
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

    return next.handle(authReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && !environment.production) {
        }
        return event;
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status == 401) {
          localStorage.removeItem('token');
        }
        return throwError(errorResponse);
      }),
      finalize(() => {})
    );
  }
}
