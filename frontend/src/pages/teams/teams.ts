import { Observable } from 'rxjs/rx';
import { Team } from './../../model/team';
import { TeamProviderFake } from './../../providers/team/team-provider-fake';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams:Observable<Team[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public teamProvider:TeamProviderFake) {
  }

  ionViewDidLoad() {
    this.teams = this.teamProvider.getAllTeams();
  }

}
