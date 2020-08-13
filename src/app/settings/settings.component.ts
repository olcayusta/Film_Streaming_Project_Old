import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SettingsService} from '../shared/services/settings.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatSlideToggleChange, MatSnackBar} from '@angular/material';
import {SelectPhotoDialogComponent} from '../select-photo-dialog/select-photo-dialog.component';
import {StateService} from '../shared/services/state.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('Olcay'),
    lastName: new FormControl('Usta')
  });

  email = new FormControl('pikachu@gmail.com');
  password = new FormControl('123456');

  favoriteTheme: string = 'Mor';
  themes: string[] = ['Mor', 'Mavi', 'Turuncu'];

  constructor(
    private settingsService: SettingsService,
    private stateService: StateService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Ayarlar - app');
  }

  /* Save name */
  saveName() {
    this.settingsService.saveName({
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value
    }).subscribe(res => {
      this.snackBar.open('Değişiklikler kaydedildi', '', {
        duration: 3000
      });
    });
  }

  /* Save mail */
  saveMail() {

  }

  savePassword() {

  }

  selectorTheme(event: MatSlideToggleChange) {
    if (event.checked) {
      this.stateService.updateData(true);
    } else {
      this.stateService.updateData(false);
    }
  }

  changePhoto() {
    const dialog = this.dialog.open(SelectPhotoDialogComponent, {
      autoFocus: false,
      width: '80vw',
      maxWidth: '1024px'
    });
  }

  changeTheme(color: string) {
    this.stateService.updateTheme(color);
    localStorage.setItem('theme', color);
  }
}
