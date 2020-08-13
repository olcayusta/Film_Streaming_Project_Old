import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {StateService} from './shared/services/state.service';
import {MatDialog} from '@angular/material';
import {CreateRoomDialogComponent} from './create-room-dialog/create-room-dialog.component';
import {NavigationEnd, Router} from '@angular/router';
import {LoaderService} from './shared/services/loader.service';
import {async} from 'rxjs/internal/scheduler/async';
import {__values} from 'tslib';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('loader', [
      state('inactive', style({
        display: 'none',
        opacity: 0
      })),
      state('active', style({
        display: 'block',
        opacity: 1
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'html5-player';
  darkTheme = false;

  navigationEnded = false;

  isLoading = false;

  state = 'inactive';

  constructor(
    private dialog: MatDialog,
    overlayContainer: OverlayContainer,
    private stateService: StateService,
    private renderer: Renderer2,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.stateService.$data.subscribe(data => {
      this.darkTheme = data;
      if (data) {
        overlayContainer.getContainerElement().classList.add('dark-theme');
      }
    });
  }

  openCreateButton() {
    const dialog = this.dialog.open(CreateRoomDialogComponent, {
      autoFocus: false,
      width: '640px'
    });
  }

  overflowDisable() {
    // document.body.style.overflow = 'hidden';
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navigationEnded = true;
      }
    })
  }

  ngAfterViewInit() {

    this.loaderService.display$
      .subscribe((async (result) => {
        this.isLoading = await result;
        console.log(this.isLoading);
        if (this.isLoading) {
          this.state = 'active';
        } else {
          this.state = 'inactive';
        }
      }));


/*    this.loaderService.display$.subscribe((async (value) => {
      this.isLoading = await value;
      console.log(this.isLoading);
      if (this.isLoading) {
        this.state = 'active';
      } else {
        this.state = 'inactive';
      }
    }))*/
  }

}
