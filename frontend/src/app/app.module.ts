import { TeamsPage } from './../pages/teams/teams';
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
import { TeamProvider } from '../providers/team/team-provider';

import { PlayerProvider } from '../providers/player/player-provider';
import { StatsProvider } from '../providers/stats/stats-provider';
import { MatchProvider } from '../providers/match/match-provider';

@NgModule({
  declarations: [
    MyApp,
    PlayersPage,
    PlayerDetailPage,
    MatchListPage,
    TabsComponent,
    MatchDetailPage,
    TeamsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayersPage,
    PlayerDetailPage,
    MatchListPage,
    TabsComponent,
    MatchDetailPage,
    TeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamProvider,
    PlayerProvider,
    StatsProvider,
    MatchProvider,
    TeamProvider
  ]
})
export class AppModule {}
