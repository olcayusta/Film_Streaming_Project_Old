import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://localhost:4000/users/1');
  }

  /*
  * Update name and surname
  * */
  saveName(body: Object) {
    return this.http.put('http://localhost:4000/users', body);
  }

  savePassword() {

  }
}
