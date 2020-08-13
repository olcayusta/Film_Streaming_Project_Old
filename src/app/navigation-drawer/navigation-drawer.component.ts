import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationDrawerComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('outlined-home', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-home-24px.svg'));
    iconRegistry.addSvgIcon('outlined-whatshot', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-whatshot-24px.svg'));
    iconRegistry.addSvgIcon('outlined-folder', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-folder-24px.svg'));
    iconRegistry.addSvgIcon('outlined-settings', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-settings-24px.svg'));
    iconRegistry.addSvgIcon('outlined-feedback', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-feedback-24px.svg'));
  }

  ngOnInit() {
  }

}
