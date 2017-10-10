import { PlayersPage } from './../players/players';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPlayers() {
    this.navCtrl.push(PlayersPage);
  }

}
