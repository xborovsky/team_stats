import { Player } from './../../model/player';
import { PlayerProvider } from './../../providers/player/player-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  private players:Observable<Player[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public playerProvider: PlayerProvider) {
  }

  ionViewDidLoad() {
    this.players = this.playerProvider.getAllPlayers();
    this.playerProvider.getAllPlayers().subscribe((data) => console.log(data));
  }

}
