import { Match } from './../../model/match';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html',
})
export class MatchDetailPage {
  match:Match;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = this.navParams.data;
  }

  ionViewDidLoad() {
  }

}
