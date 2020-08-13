import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  themeSource = new BehaviorSubject<string>('purple');
  $theme = this.themeSource.asObservable();

  dataSource = new BehaviorSubject<boolean>(false);
  $data = this.dataSource.asObservable();

  constructor() { }

  updateTheme(color: string) {
    this.themeSource.next(color);
  }

  updateData(data: boolean) {
    this.dataSource.next(data);
  }
}
