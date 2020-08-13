import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {MatDialog} from '@angular/material';
import {SwitchAccountDialogComponent} from '../switch-account-dialog/switch-account-dialog.component';

@Component({
  selector: 'app-usermenu-popup',
  templateUrl: './usermenu-popup.component.html',
  styleUrls: ['./usermenu-popup.component.scss']
})
export class UsermenuPopupComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  exitToApp() {
    this.authService.logout();
  }

  openAccountDialog() {
    const dialog = this.dialog.open(SwitchAccountDialogComponent, {
      autoFocus: false,
      width: '860px'
    });
  }
}
