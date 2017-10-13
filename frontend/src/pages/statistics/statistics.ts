import { Player } from './../../model/player';
import { PlayerProviderFake } from './../../providers/player/player-provider-fake';
import { PlayerDetailPage } from './../player-detail/player-detail';
import { Statistic } from './../../model/statistic';
import { Observable } from 'rxjs/Observable';
import { StatsProviderFake } from './../../providers/stats/stats-provider-fake';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  statistics:Observable<Statistic[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statsProvider:StatsProviderFake,
    public playerProvider:PlayerProviderFake) {
  }

  ionViewDidLoad() {
    this.statistics = this.statsProvider.getStats();
  }

  goToPlayerDetail(playerId:number) {
    this.playerProvider.getPlayer(playerId).subscribe((player:Player) =>
      this.navCtrl.push(PlayerDetailPage, player)
    );
    
  }

}
