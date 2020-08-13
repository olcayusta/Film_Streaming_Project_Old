import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  display = new BehaviorSubject<boolean>(false);
  display$ = this.display.asObservable();

  constructor() { }

  showProgress() {
    this.display.next(true);
  }

  hideProgress() {
    this.display.next(false);
  }
}
