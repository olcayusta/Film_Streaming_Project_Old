import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {FormControl} from '@angular/forms';
import {SearchService} from '../shared/services/search.service';
import {Router} from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef, MatDialog, MatIconRegistry} from '@angular/material';
import {CreateRoomDialogComponent} from '../create-room-dialog/create-room-dialog.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

export interface State {
  name: string;
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Output() drawerOpen = new EventEmitter();

  searchTerm = new FormControl('');

  searchFocused = false;

  profileAvatarMenuOpened = false;
  notificationPopupOpened = false;
  messagesPopupOpened = false;

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Filmler'
    },
    {
      name: 'Diziler'
    },
    {
      name: 'Soundtrack'
    },
    {
      name: 'Kişiler'
    }
  ];

  sticky = false;

  mobileSearchForm = false;

  constructor(
    public overlay: Overlay,
    private dialog: MatDialog,
    private searchService: SearchService,
    private router: Router,
    private renderer: Renderer2,
    private bottomSheet: MatBottomSheet,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('outlined-notifications', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-notifications-24px.svg'))
    this.filteredStates = this.searchTerm.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {

    this.searchTerm.valueChanges.subscribe(value => {
      this.router.navigate(['/search/', value]);
    });

/*    this.searchTerm.valueChanges.subscribe(value => {
      this.router.navigate([`/search/`, value]);
    });*/
    this.renderer.listen('window', 'scroll', (event) => {
  /*    if (window.pageYOffset >= 64) {
        console.log('Hello!');
        this.sticky = true;
      } else {
        this.sticky = false;
      }*/
    });
  }

  openRoomDialog() {
    const dialog = this.dialog.open(CreateRoomDialogComponent, {
      width: '640px'
    });
  }

  openBottomSheet() {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetOverviewExampleSheet, {
      ariaLabel: 'Share on social media',
      closeOnNavigation: true
    });
  }

  openSearchForm() {
    this.mobileSearchForm = true;
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.scss']
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
