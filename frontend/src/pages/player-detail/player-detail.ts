import { StatsProvider } from './../../providers/stats/stats-provider';
import { Statistic } from './../../model/statistic';
import { Player } from './../../model/player';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-player-detail',
  templateUrl: 'player-detail.html',
})
export class PlayerDetailPage {
  player:Player;
  playerId:number;
  statistic:Statistic;

  constructor(public navCtrl: NavController, public navParams: NavParams, public statsProvider:StatsProvider) {
    this.playerId = this.navParams.data.id; // TODO better?
    this.player = this.navParams.data;
  }

  ionViewDidLoad() {
    this.statsProvider.getPlayerStats(this.playerId)
      .subscribe((statistic:Statistic) => {
        this.statistic = statistic;
        console.log(statistic);
      });
  }

}
