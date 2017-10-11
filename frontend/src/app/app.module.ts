import { PlayerDetailPage } from './../pages/player-detail/player-detail';
import { PlayersPage } from './../pages/players/players';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeamProvider } from '../providers/team/team';

import { TeamComponent } from './../components/team/team';
import { PlayerProvider } from '../providers/player/player-provider';
import { StatsProvider } from '../providers/stats/stats-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamComponent,
    PlayersPage,
    PlayerDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayersPage,
    PlayerDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamProvider,
    PlayerProvider,
    StatsProvider
  ]
})
export class AppModule {}
