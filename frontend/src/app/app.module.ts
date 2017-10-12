import { MatchDetailPage } from './../pages/match-detail/match-detail';
import { TabsComponent } from './../components/tabs/tabs';
import { MatchListPage } from './../pages/match-list/match-list';
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
import { MatchProvider } from '../providers/match/match-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamComponent,
    PlayersPage,
    PlayerDetailPage,
    MatchListPage,
    TabsComponent,
    MatchDetailPage
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
    PlayerDetailPage,
    MatchListPage,
    TabsComponent,
    MatchDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamProvider,
    PlayerProvider,
    StatsProvider,
    MatchProvider
  ]
})
export class AppModule {}
