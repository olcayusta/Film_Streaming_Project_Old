import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MAT_MENU_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY } from '@angular/material';
import { HomeComponent } from './home/home.component';
import {BottomSheetOverviewExampleSheet, TopbarComponent} from './topbar/topbar.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { WatchComponent } from './watch/watch.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';
import { PreviewComponent } from './preview/preview.component';
import { PreviewSeasonsComponent } from './preview/preview-seasons/preview-seasons.component';
import { PreviewCastComponent } from './preview/preview-cast/preview-cast.component';
import { PreviewAboutComponent } from './preview/preview-about/preview-about.component';
import { CurrentTimePipe } from './shared/pipes/current-time.pipe';
import { DurationPipe } from './shared/pipes/duration.pipe';
import {BlockScrollStrategy, Overlay, OverlayModule} from '@angular/cdk/overlay';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { DashComponent } from './dash/dash.component';
import { SelectPhotoComponent } from './select-photo/select-photo.component';
import { SelectPhotoDialogComponent } from './select-photo-dialog/select-photo-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PeopleComponent } from './people/people.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { TogetherComponent } from './together/together.component';
import { AccountSwitcherComponent } from './account-switcher/account-switcher.component';
import { SwitchAccountDialogComponent } from './switch-account-dialog/switch-account-dialog.component';
import { IndexComponent } from './index/index.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsermenuPopupComponent } from './usermenu-popup/usermenu-popup.component';
import { SanitizePipe } from './shared/pipes/sanitize.pipe';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { LangPipe } from './shared/pipes/lang.pipe';
import { EpisodesPopupComponent } from './watch/episodes-popup/episodes-popup.component';
import { CreateRoomDialogComponent } from './create-room-dialog/create-room-dialog.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ProfileComponent } from './profile/profile.component';
import {PlatformModule} from '@angular/cdk/platform';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HorizontalSliderComponent } from './horizontal-slider/horizontal-slider.component';
import { ContinueWatchingComponent } from './continue-watching/continue-watching.component';
import { ContinueWatchingSliderComponent } from './continue-watching-slider/continue-watching-slider.component';
import {LoaderInterceptorService} from './shared/interceptors/loader-interceptor.service';
import {ObserversModule} from '@angular/cdk/observers';
import { ContinueWatchingSliderItemComponent } from './continue-watching-slider/continue-watching-slider-item/continue-watching-slider-item.component';
import { MovieSliderComponent } from './movie-slider/movie-slider.component';
import { MovieSliderItemComponent } from './movie-slider/movie-slider-item/movie-slider-item.component';
import {SharedModule} from './shared/shared.module';
import { WatchFullseriesComponent } from './watch-fullseries/watch-fullseries.component';
import {MaterialModule} from './material/material.module';
import { VideoSettingSheetComponent } from './watch/video-setting-sheet/video-setting-sheet.component';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    NavigationDrawerComponent,
    WatchComponent,
    LoginComponent,
    ReviewComponent,
    PreviewComponent,
    PreviewSeasonsComponent,
    PreviewCastComponent,
    PreviewAboutComponent,
    CurrentTimePipe,
    DurationPipe,
    SignupComponent,
    NotificationPopupComponent,
    DashComponent,
    SelectPhotoComponent,
    SelectPhotoDialogComponent,
    PeopleComponent,
    WatchLaterComponent,
    TogetherComponent,
    AccountSwitcherComponent,
    SwitchAccountDialogComponent,
    IndexComponent,
    WelcomeComponent,
    UsermenuPopupComponent,
    SanitizePipe,
    HorizontalListComponent,
    LangPipe,
    EpisodesPopupComponent,
    CreateRoomDialogComponent,
    CreateRoomComponent,
    ProfileComponent,
    BottomSheetOverviewExampleSheet,
    HorizontalSliderComponent,
    ContinueWatchingComponent,
    ContinueWatchingSliderComponent,
    ContinueWatchingSliderItemComponent,
    MovieSliderComponent,
    MovieSliderItemComponent,
    WatchFullseriesComponent,
    VideoSettingSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule,
    DragDropModule,
    ObserversModule,
    MaterialModule,
    SharedModule,
    PlatformModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    SelectPhotoDialogComponent,
    CreateRoomDialogComponent,
    SwitchAccountDialogComponent,
    BottomSheetOverviewExampleSheet,
    VideoSettingSheetComponent
  ],
  providers: [
    {provide: MAT_MENU_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay]},
    {provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay]},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
