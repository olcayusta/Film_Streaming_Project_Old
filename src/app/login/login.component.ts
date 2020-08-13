import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  hide = true;

  usernameOk = false;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submitUsername() {
    this.authService.authUsername(this.username.value).subscribe(result => {

      if (this.username.valid) {
        this.username.setErrors(null);
        if (!result['username_available']) {
          this.username.setErrors({
            username_available: true
          });
        } else {
          this.usernameOk = true;
        }
      }
    });
  }

  submitPassword() {
    this.authService.authPassword(this.username.value, this.password.value).subscribe(result => {
      if (this.password.valid) {
        this.password.setErrors(null);
        if (!result['user_available']) {
          this.password.setErrors({
            user_available: true
          });
        } else {
          localStorage.setItem('token', result['token']);
        }
      }

    });
  }

}
