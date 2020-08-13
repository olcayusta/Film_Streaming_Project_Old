import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material';
import {SelectPhotoDialogComponent} from '../select-photo-dialog/select-photo-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  profileImage;

  constructor(
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  fileChange(event) {
    const file = event.target.files[0];
    const blob = URL.createObjectURL(file);
    this.profileImage = this.domSanitizer.bypassSecurityTrustUrl(blob);
  }

  selectPhoto() {
    const dialog = this.dialog.open(SelectPhotoDialogComponent);
  }

}
