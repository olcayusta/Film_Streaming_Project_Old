import { Injectable } from '@angular/core';
import {LoaderService} from '../services/loader.service';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse, HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showProgress();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderService.hideProgress();
        }
      },
      (err: any) => {
        this.loaderService.hideProgress();
      }));
  }
/*
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    this.loaderService.showProgress();

    return next.handle(req).pipe(tap(
      (event: HttpEvent<any>) => {
      }, (err: any) => {
        console.log('Http error!');
      }),
      finalize(() => {
        this.loaderService.hideProgress();
        console.log('Complete, errors or is cancelled!');
      })
    );

  }*/
}
