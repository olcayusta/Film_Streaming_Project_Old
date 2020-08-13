import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WatchComponent} from './watch/watch.component';
import {LoginComponent} from './login/login.component';
import {PreviewComponent} from './preview/preview.component';
import {PreviewSeasonsComponent} from './preview/preview-seasons/preview-seasons.component';
import {PreviewCastComponent} from './preview/preview-cast/preview-cast.component';
import {PreviewAboutComponent} from './preview/preview-about/preview-about.component';
import {SignupComponent} from './signup/signup.component';
import {PeopleComponent} from './people/people.component';
import {WatchLaterComponent} from './watch-later/watch-later.component';
import {TogetherComponent} from './together/together.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'watch/:id', component: WatchComponent},
      {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
      {path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesModule'},
      {path: 'library', loadChildren: './library/library.module#LibraryModule'},
      {path: 'movies', loadChildren: './films/films.module#FilmsModule'},
      {path: 'tv', loadChildren: './series/series.module#SeriesModule'},
      {path: 'kids', loadChildren: './kids/kids.module#KidsModule'},
      {path: 'party', loadChildren: './party/party.module#PartyModule'},
      {path: 'rooms', loadChildren: './rooms/rooms.module#RoomsModule'},
      {path: 'watchlater', component: WatchLaterComponent},
      {path: 'whatshot', loadChildren: './whatshot/whatshot.module#WhatshotModule'},
      {path: 'title/:titleId', loadChildren: './title/title.module#TitleModule'},
      {
        path: 'preview/:postId',
        component: PreviewComponent,
        children: [
          {path: '', component: PreviewAboutComponent},
          {path: 'cast', component: PreviewCastComponent},
          {path: 'seasons', component: PreviewSeasonsComponent},
        ]
      },
      {
        path: 'title2/:postId',
        component: PreviewComponent,
        children: [
          // {path: '', component: PreviewAboutComponent},
          {path: 'cast', component: PreviewCastComponent},
          {path: 'seasons', component: PreviewSeasonsComponent},
        ]
      },
      { path: 'people', component: PeopleComponent },
      {path: 'search/:searchTerm', loadChildren: './search/search.module#SearchModule'}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', loadChildren: './error/error.module#ErrorModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
