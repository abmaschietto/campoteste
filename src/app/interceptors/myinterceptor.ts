import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HTTP_INTERCEPTORS,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';



@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor() {}


  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Interceptor --- ${req.body}`);

    return next.handle(req);
  }
}

export const LoadingInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: MyInterceptor,
  multi: true,
};
