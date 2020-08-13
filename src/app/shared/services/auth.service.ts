import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  authUsername(username: string) {
    return this.http.post('http://localhost:4000/auth/username', {
      username: username
    });
  }

  authPassword(username: string, password: string) {
    return this.http.post('http://localhost:4000/auth/password', {
      username: username,
      password: password
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
