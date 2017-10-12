import { Observable } from 'rxjs/rx';
import { Match } from './../../model/match';
import { MatchProvider } from './../../providers/match/match-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MatchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match-list',
  templateUrl: 'match-list.html',
})
export class MatchListPage {
  matches : Observable<Match[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public matchProvider:MatchProvider) {}

  ionViewDidLoad() {
    this.matches= this.matchProvider.getAllMatches();
  }

  goToMatchDetail(id:number) {
    // TODO
  }

}
