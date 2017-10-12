import { Observable } from 'rxjs/rx';
import { Team } from './../../model/team';
import { TeamProvider } from './../../providers/team/team-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams:Observable<Team[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public teamProvider:TeamProvider) {
  }

  ionViewDidLoad() {
    this.teams = this.teamProvider.getAllTeams();
  }

}
