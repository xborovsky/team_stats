import { MatchListPage } from './../../pages/match-list/match-list';
import { PlayersPage } from './../../pages/players/players';
import { Component } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  playersRoot = PlayersPage;
  matchesRoot = MatchListPage;

  constructor() {}

}
