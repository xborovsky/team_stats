import { MatchDetailPage } from './../match-detail/match-detail';
import { Observable } from 'rxjs/rx';
import { Match } from './../../model/match';
import { MatchProviderFake } from './../../providers/match/match-provider-fake';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-match-list',
  templateUrl: 'match-list.html',
})
export class MatchListPage {
  matches : Observable<Match[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public matchProvider:MatchProviderFake) {}

  ionViewDidLoad() {
    this.matches= this.matchProvider.getAllMatches();
  }

  goToMatchDetail(id:number) {
    this.matchProvider.getMatch(id)
      .subscribe((match:Match) => this.navCtrl.push(MatchDetailPage, match));
  }

}
