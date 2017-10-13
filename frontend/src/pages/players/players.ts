import { PlayerDetailPage } from './../player-detail/player-detail';
import { Player } from './../../model/player';
import { PlayerProviderFake } from './../../providers/player/player-provider-fake';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  private players:Observable<Player[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public playerProvider: PlayerProviderFake) {
  }

  ionViewDidLoad() {
    this.players = this.playerProvider.getAllPlayers();
  }

  goToPlayerDetail(id:number) {
    this.playerProvider.getPlayer(id).subscribe((player:Player) =>
      this.navCtrl.push(PlayerDetailPage, player)
    );
  }

}
